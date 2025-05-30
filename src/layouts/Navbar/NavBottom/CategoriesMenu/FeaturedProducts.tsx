import ProductItem from "../../../../components/Products/ProductItem"
import ProductsListWrapper from "../../../../components/wrappers/ProductsListWrapper"
import type { ProductType } from "../../../../types/product.type"

const productsList: ProductType[] = [{
    id: '1',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
    regularPrice: 299000,
    discountPrice: 30000,
    img: 'https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png'
}, {
    id: '2',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
    regularPrice: 299000,
    discountPrice: 30000,
    img: 'https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png'
}, {
    id: '3',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
    regularPrice: 299000,
    discountPrice: 30000,
    img: 'https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png'
}, {
    id: '4',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
    regularPrice: 299000,
    discountPrice: 30000,
    img: 'https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png'
}, {
    id: '5',
    name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
    regularPrice: 299000,
    discountPrice: 30000,
    img: 'https://tat-filter.com/wp-content/uploads/2024/07/Hengst-E472L-1.png'
}]

function FeaturedProducts() {
    return (
        <ProductsListWrapper productsTitle="Sản Phẩm Bán Chạy" productsUrl="#">
            <div className="flex flex-row items-center justify-between gap-5">
                {productsList.map((product: ProductType, i) => (
                    <ProductItem key={i} productData={product} />
                ))}
            </div>
        </ProductsListWrapper>
    )
}

export default FeaturedProducts
