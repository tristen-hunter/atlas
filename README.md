<p align="center">
  <img src="./landing-page/src/assets/banner.png" alt="Atlas banner" width="100%"/>
</p>

<h1 align="center">Atlas</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Deployed-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/Administered-R3.2M%20In%20Payouts-0A66C2?style=for-the-badge">
  <img src="https://img.shields.io/badge/Manages-R53M%20in%20Assets-0A66C2?style=for-the-badge">
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=spring,react,ts,vite,postgres,aws,docker,linux,nginx,git,github" alt="Tech stack"/>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#key-challenges">Key Challenges</a> •
  <a href="https://lease-atlas.com"><b>Live Site ↗</b></a>
</p>

---

## Overview

Atlas is a simple Lease Management software for brokerages managing independent contractors leases.
We have all the tooling needed to administer payments, manage landlord relationships, agent management, and a whole lot more.

---

## Features


- Agent Management System (AMS)
  - Manage communication related to rentals between the brokerage and agent
  - Status management
  - Lease grouping and performance reporting
- Lease Agreement Mapping (LAM)
  - Map the inputs of a lease agreement into a digital copy that automatically uses your inputs to guide the admins
  - Auto calculate monthly payouts
  - handle multiple landlords, contractors, shortfalls, deposit tracking
- Reporting
  - Agent Payouts
  - Office Payouts
  - landlord income
  - Agent performance

---

## Architecture
<!--
- Diagram first if you have one (image or even a simple Mermaid diagram GitHub can render)
- Then a short paragraph walking through the flow: client -> API -> DB -> etc.
- Call out 2-3 KEY DECISIONS explicitly, e.g.:
    "Chose Postgres over X because..."
    "Used Spring Security with role-based access because..."
    "Deployed via Docker on EC2 rather than a managed PaaS because..."
- This is the highest-value section for showing engineering judgment — don't skip the "why"
-->

Diagram:
under construction 🚧 
<!-- Add Explanations of key decisions -->


---

## Tech Stack
<!--
- Table format works well here: Layer | Tech | Why
-->

| Layer          | Technology                          | Why |
|----------------|--------------------------------------|-----|
| Backend        | Spring Boot, Spring Security, Thymeleaf | Needed a modern enterprise API design system. Spring boot suited my needs and offered loads of tools out the box. |
| Frontend       | React + TypeScript (Vite)            | Needed a component-driven UI for complex forms (lease mapping); TypeScript for type safety across a growing codebase; Vite for fast dev iteration. |
| Database       | PostgreSQL                           | Reliable relational database, suited my schema needs perfectly. No document DB needed (no mongo DB) |
| Infra          | AWS EC2, Docker, Nginx, Linux        | Docker for reproducible deployments across dev/prod; Nginx as a reverse proxy in front of the Spring Boot app; EC2 for full control over the server given budget constraints of a 1-2 person team |
| Version Control| Git, GitHub                          | Utilising version control for easy management and team collab was essential |

---

## Key Challenges

### Multiple payout problem
**Problem:** Many times a tenant doesn't pay the rent in full, however the landlord wants the money now. Then payouts need to be calculated with new inputs, the shortfall must be handled and logged correctly.  

**Solution:** I split automatic tracking and manual tracking with an entity flag, this meant certain payout entities could be marked as manual for such a case.   

**Result:** No code duplication and a reliable, robust system that manages a lease through any pay terms, always compliant.

### Query hell
**Problem:** I had a major N + 1 issue on page load. Specifically list views, where 5 layer nesting caused up to 501 requests for 100 entities!  

**Solution:** I forced batch fetching at the DB level so entities are fetched on mount (no lazy fetching through JPA) to ensure the mapper didn't ever make a DB call.  

**Result:** 501 --> 5

---

## Known Limitations / Future Work

- No auto scaleability on the production environment (no CI/CD due to scale of team 1-2 people)
- Cannot handle multi tenancy (yet, currently being implemented)
- Agent accounts with a host of tools for the agent to manage their business - also under construction

---

## License & notes

This project is **proprietary software**. All rights reserved © 2026 Tristen Hunter / Atlas.  

_PS - the source code in this repo is for the landing page the acutal repo with 20k + line of code is private and still under development._

---

<p align="center">
  <i>Built by <a href="https://www.linkedin.com/in/tristen-hunter-dev/">Tristen Hunter</a></i>
</p>