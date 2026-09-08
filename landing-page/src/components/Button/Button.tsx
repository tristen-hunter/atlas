interface ButtonProps {
  label: string
  onClick?: () => void
}

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
                bg-primary
                text-white
                px-4 lg:px-6
                py-2
                rounded-xl
                text-[16px] lg:text-[20px]
                font-semibold
                leading-[1.4]
                hover:bg-primary/90
                transition-colors
                duration-200
                max-w-50
            "
        >
            {label}
        </button>
    )
}