import ProductItem from "../../../components/Products/ProductItem"
import type { ProductType } from "../../../types/product.type"
import FilterSidebar from "./FilterSidebar"
import Sort from "./Sort"

const allProducts: ProductType[] = [{
    id: "1",
    name: "Lọc gió điều hòa ( bên trong ) Vinfast Lux SA (9194098)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "2",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "3",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "4",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "5",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "6",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
}, {
    id: "1",
    name: "Lọc gió điều hòa ( bên trong ) Vinfast Lux SA (9194098)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "2",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "3",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "4",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "5",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},
{
    id: "6",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},]
function AllProducts() {
    return (
        <div className='w-full h-full
                        rounded-[.7rem]
                        grid grid-cols-5 gap-4'>
            <FilterSidebar />
            <div className="col-span-4
                            flex flex-col items-start justify-center gap-5">
                <div className="w-full flex flex-row items-center justify-between">
                    <h3 className='text-[1.3rem] font-semibold'>Danh sách sản phẩm</h3>
                    <Sort />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {allProducts.map((product) => (
                        <ProductItem key={product.id} productData={product} buyButton className="col-span-1" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProducts
