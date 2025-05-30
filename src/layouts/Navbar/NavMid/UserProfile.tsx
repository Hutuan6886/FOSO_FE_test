import { FaUserCircle } from 'react-icons/fa'

function UserProfile() {
    return (
        <div className='flex flex-row items-center justify-center gap-2
                        rounded-[25px] p-3
                        hover:bg-[#eaf2f3]
                        cursor-pointer'>
            <FaUserCircle size={25} className='text-blue-600' />
            <p className='text-nowrap'>Tài khoản</p>
        </div>
    )
}

export default UserProfile
