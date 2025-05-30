interface ButtonFilterProps {
    label: string
}
function ButtonFilter({ label }: ButtonFilterProps) {
    return (
        <button className="w-full p-1
                            roundred-md border cursor-pointer
                            border-[#e9e9e9]">
            {label}
        </button>
    )
}

export default ButtonFilter
