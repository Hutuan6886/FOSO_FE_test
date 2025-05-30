import { useState } from "react"
import CartDropdown from "./CartDropdown"
import { FaShoppingCart } from 'react-icons/fa'

function Cart() {
    const [hiddenCartDropdown, setHiddenCartDropdown] = useState<boolean>(true)
    return (
        <>
            <div className='relative 
                        flex flex-row items-center justify-center flex-nowrap gap-2
                        rounded-[25px] p-3
                        hover:bg-[#eaf2f3]
                        cursor-pointer'
                onMouseEnter={() => setHiddenCartDropdown(false)}
                onMouseLeave={() => setHiddenCartDropdown(true)}>
                <FaShoppingCart size={25} className='text-blue-600' />
                <div className='absolute top-0 right-18
                            size-5 flex flex-col justify-center
                            bg-red-500
                            rounded-[50px] shadow-md'>
                    <p className='m-auto text-white
                            text-[0.75rem]'>8</p>
                </div>
                <p className='text-nowrap'>Giỏ hàng</p>
            </div>
            <div hidden={hiddenCartDropdown} className="absolute z-20 top-[5rem] right-30"
                onMouseEnter={() => setHiddenCartDropdown(false)}
                onMouseLeave={() => setHiddenCartDropdown(true)}>
                <CartDropdown />
            </div>
        </>
    )
}

export default Cart
