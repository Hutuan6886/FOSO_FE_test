import type { ProductType } from "../../types/product.type"
import { cn, formatter } from "../../utils/tailwindMerge"

interface ProductItemProps {
    productData: ProductType
    buyButton?: boolean
    className?: string
}
function ProductItem({ productData, buyButton, className }: ProductItemProps) {
    const discountPercent: number = (productData.discountPrice * 100) / productData.regularPrice
    return (
        <div className={cn(`w-full h-auto
                        rounded-md p-2
                        bg-white
                        flex flex-col items-start justify-center gap-3`, className)}>
            <img src={productData.img} alt="product image" className="rounded-md" />
            <p className="font-semibold cursor-pointer line-clamp-2">{productData.name}</p>
            <div className="w-full flex flex-col gap-1.5">
                <p className="text-[1.3rem] font-semibold
                                 text-red-700">{formatter.format(productData.regularPrice)}</p>
                <div className="flex flex-row items-center justify-start gap-3
                                text-[.9rem]">
                    <p className="text-[#b4b4b4]">{formatter.format(productData.discountPrice)}</p>
                    <span className="text-red-700">-{discountPercent.toFixed()}%</span>
                </div>
                {buyButton
                    && <button className="w-full px-4 py-1
                                        rounded-md font-semibold cursor-pointer
                                    bg-[#c4dae0] text-blue-700">Mua ngay</button>}
            </div>

        </div>
    )
}

export default ProductItem
