import Container from '../../../components/wrappers/Container'
import Categories from './Categories'
import MainNav from './MainNav'

function index() {
    return (
        <Container className='flex flex-nowrap flex-row items-center justify-start gap-4'>
            <Categories />
            <MainNav />
        </Container>
    )
}

export default index
