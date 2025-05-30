import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

interface ProductsListProps {
    productsTitle: string
    productsUrl: string
    children: React.ReactNode
}
function ProductsListWrapper({ productsTitle, productsUrl, children }: ProductsListProps) {
    return (
        <div className='w-full h-full
                        flex flex-col items-start gap-5'>
            <div className='w-full flex flex-row items-center justify-between'>
                <h3 className='text-2xl font-semibold'>{productsTitle}</h3>
                <a href={productsUrl} className='text-blue-700
                                                text-[.9rem] font-semibold
                                                flex flex-row items-center justify-center gap-1'>
                    Xem tất cả <FaAnglesRight />
                </a>
            </div>
            {children}
        </div>
    )
}

export default ProductsListWrapper
