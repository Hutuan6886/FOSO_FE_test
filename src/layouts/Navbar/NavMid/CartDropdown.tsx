import ProductItem from "../../../components/Products/ProductItem"
import type { ProductType } from "../../../types/product.type"

const cartData: ProductType[] = [{
    id: '1',
    name: "Lọc nhiên liệu Chevrolet Colorado – Traiblazer (52100212",
    regularPrice: 299000,
    discountPrice: 30000,
    img: "https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png",
},]
function CartDropdown() {
    return (
        <div className="w-[135px] h-auto 
                        bg-white shadow-md
                            rounded-md p-3
                        flex flex-col items-center justify-center gap-3">
            {cartData.map((product) => (
                <ProductItem key={product.id} productData={product} buyButton />
            ))}
        </div>
    )
}

export default CartDropdown
