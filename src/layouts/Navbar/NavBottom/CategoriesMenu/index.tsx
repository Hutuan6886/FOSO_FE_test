import { useState } from "react"
import CategoriesButton from "./CategoriesButton"
import CategoriesContent from "./CategoriesContent"


function Categories() {
    const [hiddenCategoriesDropdown, setHiddenCategoriesDropdown] = useState<boolean>(true)
    return (
        <>
            <CategoriesButton label="Danh Mục Sản Phẩm" hiddenCategoriesDropdown={hiddenCategoriesDropdown}
                onMouseEnter={() => setHiddenCategoriesDropdown(false)}
                onMouseLeave={() => setHiddenCategoriesDropdown(true)} />
            <div hidden={hiddenCategoriesDropdown} className="absolute z-10 top-[2.5rem] left-0
                                                                transition-all ease-in-out"
                onMouseOver={() => setHiddenCategoriesDropdown(false)}
                onMouseLeave={() => setHiddenCategoriesDropdown(true)}>
                <CategoriesContent />
            </div>
        </>
    )
}

export default Categories
