import { FaClock, FaShippingFast, FaTruckMoving } from "react-icons/fa"
import { IoReloadCircle } from "react-icons/io5"
import MainNavItem from "./MainNavItem"

const navContent = [{
    label: 'Về Chúng Tôi',
    href: '#'
}, {
    label: 'Bài Viết',
    href: '#'
}, {
    label: 'Catalog',
    href: '#'
}, {
    label: 'Liên Hệ',
    href: '#'
}]
const navService = [{
    label: 'Hỗ Trợ 24/7',
    href: '#',
    icon: <FaClock size={15} className="text-blue-700" />
}, {
    label: 'Miễn Phí Vận Chuyển',
    href: '#',
    icon: <FaTruckMoving size={15} className="text-blue-700" />
}, {
    label: 'Giao Hàng Nhanh 2h',
    href: '#',
    icon: <FaShippingFast size={15} className="text-blue-700" />
}, {
    label: '30 Ngày Đổi Trả',
    href: '#',
    icon: <IoReloadCircle size={15} className="text-blue-700" />
}]
function MainNav() {
    return (
        <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row justify-start items-center gap-4 cursor-pointer">{navContent.map((data, i) => (
                <MainNavItem key={i} label={data.label} />
            ))}</div>
            <div className="flex flex-row justify-start items-center gap-4">{navService.map((data, i) => (
                <MainNavItem key={i} label={data.label} icon={data.icon} />
            ))}</div>
        </div>
    )
}

export default MainNav
