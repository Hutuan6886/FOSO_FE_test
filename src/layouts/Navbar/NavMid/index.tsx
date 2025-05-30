import Container from "../../../components/wrappers/Container"
import Cart from "./Cart"
import Language from "./Language"
import SearchBar from "./SearchBar"
import UserProfile from "./UserProfile"

function NavMid() {
    return (
        <Container className="relative flex flex-row items-center justify-between gap-5">
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740" alt="logo" className="size-25 cursor-pointer" />
            <SearchBar />
            <Language />
            <Cart />
            <UserProfile />
        </Container>
    )
}

export default NavMid
