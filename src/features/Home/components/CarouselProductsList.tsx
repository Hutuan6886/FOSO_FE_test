import { FaChevronLeft, FaChevronRight, } from "react-icons/fa6"
import ProductItem from "../../../components/Products/ProductItem"
import type { ProductType } from "../../../types/product.type"

const carouselProducts: ProductType[] = [{
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
function CarouselProductsList() {
    return (
        <div className="relative flex flex-row items-center justify-between gap-5">
            <button className="absolute top-1/2 -left-5 -transition-y-1/2
                                size-10 bg-[#c4dae0] rounded-[50px] cursor-pointer
                                flex flex-col items-center justify-center"><FaChevronLeft /></button>
            {carouselProducts.map((product) => (
                <ProductItem key={product.id} productData={product} buyButton />
            ))}
            <button className="absolute top-1/2 -transition-y-1/2 -right-5
                                size-10 bg-[#c4dae0] rounded-[50px] cursor-pointer
                                flex flex-col items-center justify-center"><FaChevronRight /></button>
        </div>
    )
}

export default CarouselProductsList
