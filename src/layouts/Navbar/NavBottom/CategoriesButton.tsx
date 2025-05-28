import { type ButtonHTMLAttributes } from 'react'
import { FaAngleDown, FaBars } from "react-icons/fa"
interface CategoriesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}
function CategoriesButton({ label, ...rest }: CategoriesButtonProps) {
    return (
        <button {...rest} className="px-4 py-2
                            rounded-[0.5rem] cursor-pointer
                            bg-blue-700 text-white">
            <div className="flex flex-row items-center justify-start gap-2">
                <FaBars />
                <p className="text-nowrap">{label}</p>
                <FaAngleDown />
            </div>
        </button>
    )
}

export default CategoriesButton
