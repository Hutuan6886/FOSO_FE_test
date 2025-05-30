import carouselBg from '../../../assets/images/carousel_SALE.jpg'
import CarouselProductsList from './CarouselProductsList'
function Carousel() {
    return (
        <div style={{ backgroundImage: `url(${carouselBg})` }} className={`w-full h-screen p-10 
                             bg-center bg-no-repeat
                             rounded-[.7rem]
                            flex flex-col items-start justify-end`}>
            <CarouselProductsList />
        </div>
    )
}

export default Carousel
