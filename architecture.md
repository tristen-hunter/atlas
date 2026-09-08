# Atlas - Architecture

## System Overview

Atlas is a full-stack web application composed of a Java Spring Boot backend and a React (TypeScript) frontend, backed by a PostgreSQL database. The system is containerized with Docker and deployed on a single AWS EC2 instance behind Nginx.

## Codebase Statistics

| Language   | Files | Lines of Code |
|------------|-------|----------------|
| TypeScript | 109   | 9,377 |
| Java       | 121   | 5,433 |
| HTML       | 6     | 480 |
| CSS        | 2     | 343 |
| SQL        | 5     | 124 |
| YAML       | 2     | 118 |

Total: 254 files, 16,544 lines of code (excluding node_modules, target, build artifacts, and JSON config).

## Repository Structure

```
rental_transaction_manager/
├── backend/          # Spring Boot application
├── frontend/         # React + TypeScript + Vite application
├── docker-compose.yml
├── docker-compose.prod.yml
└── uploads/          # File storage
```

## Backend Architecture

**Framework:** Spring Boot
**Package root:** `com.propcoza.legends.tools.rental_transaction_manager`

### Package Structure

| Package | Responsibility |
|---|---|
| `common.config` | Application-wide configuration: security, CORS, auditing, Thymeleaf |
| `common.exception` | Centralized exception handling (`GlobalExceptionHandler`, `ApiException`) |
| `common.security` | Authentication logic, JWT filtering (`JwtAuthenticationFilter`) |
| `common.utils` | Shared utility classes |
| `domain.admin` | Admin user accounts, authentication, JWT issuing |
| `domain.agent` | Agent entity and management |
| `domain.landlord` | Landlord entity, rental-landlord relationships, landlord payouts |
| `domain.rental` | Core rental entity |
| `domain.instance` | Rental instance entity (recurring lease periods) and financial calculations |
| `domain.adjustment` | Payment adjustments (manual/automatic handling) |
| `domain.depositRefund` | Deposit refund processing |
| `domain.refundRecipient` | Refund recipient tracking |
| `domain.document` | Document upload/storage |
| `domain.note` | Notes attached to domain entities |
| `domain.pdf` | PDF generation for reports and requisitions |
| `domain.report` | Reporting logic (agent/monthly payout reports) |
| `domain.dashboard` | Dashboard summary data |
| `validation` | Custom validation annotations (bank account number, bank name, branch code) |

### Domain Entity Pattern

Each domain package generally follows a consistent structure:
- `[Entity].java` - JPA entity
- `[Entity]Controller.java` - REST controller
- `[Entity]Service.java` - business logic
- `[Entity]Repo.java` - Spring Data repository
- `[Entity]Mapper.java` - entity/DTO mapping
- `dto/` - request/response DTOs

### Authentication & Security

- Spring Security is used for authentication and authorization.
- JWT-based authentication (`JwtAuthenticationFilter`, `JwtService`).

### Database Migrations

Managed via Flyway, located at `src/main/resources/db/migration`:

| Migration | Change |
|---|---|
| V2 | Add landlord tables |
| V3 | Add deposit tables |
| V4 | Add instance origin field, drop unique constraint |
| V5 | Add adjustment recurring flag, separate payment handling |
| V6 | Remove adjustment rows, drop constraint |

### PDF Generation

PDF documents (agent commission statements, deposit refunds, monthly payout reports, requisitions) are generated via Thymeleaf HTML templates rendered to PDF, located at `src/main/resources/templates/pdf`.

## Frontend Architecture

**Framework:** React with TypeScript, built via Vite

### Structure

| Directory | Responsibility |
|---|---|
| `components/common` | Shared reusable components (forms, page headers, landlord sections, bank detail fields) |
| `components/global` | App-wide components (breadcrumbs, data cards, confirm dialogs) |
| `components/layout` | Layout components (sidebar, topbar, protected route wrapper) |
| `components/ui` | Base UI primitives (button, input, dialog, dropdown, etc.) |
| `context` | React context providers (`authContext`, `axiosClient`) |
| `features/` | Feature modules, organized by domain (agents, landlords, rentals, instances, deposit refunds, reports, documents, adjustments & notes, admins, search) |
| `pages/` | Route-level page components |
| `lib/` | Shared utilities and validation constants |
| `services/` | API service modules |

### Feature Module Pattern

Each feature module generally includes:
- `[Feature]Card.tsx` / `[Feature]Form.tsx` - UI components
- `[feature]Schema.ts` - validation schema
- `[feature]Types.ts` - TypeScript types
- `[feature]Service.ts` - API calls
- `use[Feature].ts` - custom data-fetching hook


## Infrastructure

| Component | Role |
|---|---|
| Docker | Containerizes backend and frontend independently (`backend/Dockerfile`, `frontend/Dockerfile`) |
| Nginx | Reverse proxy; separate configs for dev and prod (`nginx.dev.conf`, `nginx.prod.conf`) |
| AWS EC2 | Hosts the deployed application |
| PostgreSQL | Primary datastore |
| Docker Compose | Orchestrates services; separate configs for dev (`docker-compose.yml`) and prod (`docker-compose.prod.yml`) |

## Key Design Decisions

| Decision | Alternative Considered | Rationale |
|---|---|---|
| Manual/automatic flag on instance entities | Separate tables per payout type | Much more manageable from an engineering standpoint - it mixes responsibilites but massively simplifies code, no risk of growing responsibility combinations |
| Batch fetching over JPA lazy loading | Per-query `@EntityGraph` fixes | A far more simple solution over a codebase wide rewrite for entity graphs |
| Monolithic Spring Boot backend | Microservices | No need for a distributed scaleable setup here - speed over scaleability. |
| PostgreSQL | MongoDB / other NoSQL | Postgres provided a strict structure for the data, which the financial payouts and other data in Atlas are strict. |
| Single EC2 instance | Managed PaaS (e.g. Elastic Beanstalk, ECS) | Simple and easy to trouble shoot, able to handle load without lag. Will upgrade when needed. |

## Known Limitations

- [ ] No CI/CD pipeline
- [ ] No auto-scaling
- [ ] No multi-tenancy (in progress)