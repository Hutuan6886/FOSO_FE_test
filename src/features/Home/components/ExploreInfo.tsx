import { FaClock, FaTruckMoving } from "react-icons/fa6"
import Container from "../../../components/wrappers/Container"
import ExploreInfoTag from "./ExploreInfoTag"
import { FaShippingFast } from "react-icons/fa"
import { IoReloadCircle } from "react-icons/io5"

function ExploreInfo() {
    return (
        <Container className="w-full flex flex-row items-center justify-between gap-8 m-0">
            <ExploreInfoTag label="Miễn phí vận chuyển" description="Với hoá đơn từ 1 triệu" icon={<FaTruckMoving size={20} className="text-blue-700" />} />
            <ExploreInfoTag label="Hỗ trợ 24/7" description="Đội ngũ CSKH tận tình, sẵn sàng lắng nghe và phục vụ tận tâm" icon={<FaClock size={20} className="text-blue-700" />} />
            <ExploreInfoTag label="Giao hàng nhanh 24h" description="Trong vòng bán kính 10km nội thành TPHCM" icon={<FaShippingFast size={20} className="text-blue-700" />} />
            <ExploreInfoTag label="30 ngày đổi trả" description="Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển" icon={<IoReloadCircle size={20} className="text-blue-700" />} />
        </Container>
    )
}

export default ExploreInfo
