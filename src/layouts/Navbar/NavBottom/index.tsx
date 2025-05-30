import Container from '../../../components/wrappers/Container'
import Categories from './CategoriesMenu'
import MainNav from './MainNav'

function index() {
    return (
        <Container className='relative flex flex-nowrap flex-row items-center justify-start gap-4'>
            <Categories />
            <MainNav />
        </Container>
    )
}

export default index
