import { type ButtonHTMLAttributes } from 'react'
import { FaAngleDown, FaBars } from "react-icons/fa"
interface CategoriesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    hiddenCategoriesDropdown: boolean
}
function CategoriesButton({ label, hiddenCategoriesDropdown, ...rest }: CategoriesButtonProps) {

    return (
        <button {...rest} className="px-4 py-2
                            rounded-[0.5rem] cursor-pointer
                            bg-blue-700 text-white">
            <div className="flex flex-row items-center justify-start gap-2">
                <FaBars />
                <p className="text-nowrap">{label}</p>
                <FaAngleDown className={`${hiddenCategoriesDropdown ? "" : "-rotate-180"} transition duration-300`} />
            </div>
        </button>
    )
}

export default CategoriesButton
