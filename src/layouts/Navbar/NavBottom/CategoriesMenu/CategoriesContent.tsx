import { useState } from 'react'
import { categories } from '../../../../../data'
import type { ProductType } from '../../../../types/product.type'
import CategoriesList from "./CategoriesList"
import FeaturedProducts from "./FeaturedProducts"

function CategoriesContent() {
    const [products, setProducts] = useState<ProductType[]>(categories[0].products)
    const [hoveredCategoryId, setHoveredCategoryId] = useState<string>(categories[0].id);

    const handleMouseEnter = (id: string) => {
        const category = categories.find((category) => category.id === id)
        if (!category) return
        setProducts(category.products)
    }

    return (
        <div className="w-[1095px] h-full
                        bg-white text-black
                             shadow-md rounded-[0.5rem] overflow-hidden
                            grid grid-cols-5">
            <div className="col-span-1">
                <CategoriesList handleMouseEnter={handleMouseEnter}
                    hoveredCategoryId={hoveredCategoryId} setHoveredCategoryId={setHoveredCategoryId} />
            </div>
            <div className="col-span-4 p-5
                            bg-[#f5f5f5]
                            flex flex-col items-start justify-center gap-4">
                <div className="w-full grid grid-cols-3 gap-4">{products.map((product, i) => (
                    <div key={i} className="col-span-1
                                            rounded-md cursor-pointer p-3
                                            bg-white 
                                            flex flex-row items-center justify-start gap-6">
                        <img src={product.img} alt={product.img} className="size-15" />
                        <p>{product.name}</p>
                    </div>
                ))}</div>
                <hr className="w-full border-t-0 border-b border-[#c9c9c9]" />
                <FeaturedProducts />
            </div>
        </div>
    )
}

export default CategoriesContent
