import { FaUserCircle } from 'react-icons/fa'

function UserProfile() {
    return (
        <div className='flex flex-row items-center justify-center gap-2
                        cursor-pointer'>
            <FaUserCircle size={30} className='text-blue-600' />
            <p className='text-nowrap'>Tài khoản</p>
        </div>
    )
}

export default UserProfile
