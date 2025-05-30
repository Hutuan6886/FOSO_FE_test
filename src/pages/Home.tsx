import Container from "../components/wrappers/Container"
import AllProducts from "../features/Home/components/AllProducts"
import Carousel from "../features/Home/components/Carousel"
import { FaCaretRight } from 'react-icons/fa'

function Home() {
    return (
        <Container className="pt-5 flex flex-col items-start justify-center gap-5" backgroundColor="bg-[#e9e9e9]">
            <div className='w-full flex flex-row items-center justify-start gap-4'>
                <span>Trang chủ</span> <FaCaretRight /> <span>Sản phẩm</span>
            </div>
            <Carousel />
            <AllProducts />
        </Container>
    )
}

export default Home
