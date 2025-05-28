import { FaShoppingCart } from 'react-icons/fa'

function Cart() {
    return (
        <div className='relative 
                        flex flex-row items-center justify-center flex-nowrap gap-2
                        cursor-pointer'>
            <FaShoppingCart size={30} className='text-blue-600' />
            <div className='absolute -top-2 left-5
                            size-4 flex flex-col justify-center
                            bg-red-500
                            rounded-[50px] shadow-md'>
                <p className='m-auto text-white
                            text-[0.75rem]'>8</p>
            </div>
            <p className='text-nowrap'>Giỏ hàng</p>
        </div>
    )
}

export default Cart
