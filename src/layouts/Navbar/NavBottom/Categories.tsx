import CategoriesButton from "./CategoriesButton"
import CategoriesContent from "./CategoriesContent"


function Categories() {
    return (
        <div className="relative">
            <CategoriesButton label="Danh Mục Sản Phẩm" />
            <div className="absolute top-[2.5rem] left-0">
                <CategoriesContent />
            </div>
        </div>
    )
}

export default Categories
