import { FaMagnifyingGlass } from 'react-icons/fa6'
import { LuCamera } from 'react-icons/lu'

function SearchBar() {
    return (
        <div className='w-full h-full p-1
                        flex flex-row items-center justify-start gap-4
                        border-2 rounded-[20px]
                        border-blue-600 '>
            <input type="text" placeholder='Tìm sản phẩm' className='w-full px-3
                                                                    outline-0'/>
            <LuCamera size={25} className='cursor-pointer' />
            <button className=' py-2 px-5
                                rounded-[20px] cursor-pointer
                                bg-blue-600 text-white'><FaMagnifyingGlass /></button>
        </div>
    )
}

export default SearchBar
