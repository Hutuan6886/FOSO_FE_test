import { BsFillPhoneFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import Container from "../../../components/wrappers/Container";
interface NavTopProps {
    discountCode: string
    hotline: string
}
function NavTop({ discountCode, hotline }: NavTopProps) {
    return (
        <Container backgroundColor="bg-radial-[at_50%_55%] from-sky-400 to-blue-700 to-90%"
            className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2
                                text-white">
                <RiDiscountPercentFill />
                <a href="#">Nhập mã <span className="text-amber-500">{discountCode}</span> giảm ngay 10% cho lần đầu mua hàng</a>
            </div>
            <div className="flex flex-row items-center gap-6">
                <div className="flex flex-row items-center gap-2
                                text-white">
                    <FaPhone />
                    <p>Hotline:</p>
                    <a href="#">{hotline}</a>
                </div>
                <div className="flex flex-row items-center gap-2
                                text-white">
                    <BsFillPhoneFill />
                    <a href="#">Tải ứng dụng</a>
                </div>
            </div>
        </Container>
    )
}

export default NavTop
