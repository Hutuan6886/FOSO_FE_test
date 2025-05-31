import { FaArrowRightLong, FaMapLocationDot } from "react-icons/fa6"
import Container from "../../../components/wrappers/Container"

function index() {
    return (
        <div className="w-full py-8
                        bg-sky-100">
            <Container className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-start gap-5">
                    <FaMapLocationDot className="text-blue-700" size={28} />
                    <p className="text-2xl">Xem hệ thống 88 cửa hàng trên toàn quốc</p>
                </div>
                <button className="flex flex-row items-center justify-center gap-5
                                    px-5 py-2 rounded-[25px] cursor-pointer
                                    bg-white text-blue-700">Xem ngay <FaArrowRightLong /></button>
            </Container>
        </div>
    )
}

export default index
