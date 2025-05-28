import NavBottom from "./NavBottom"
import NavMid from "./NavMid"
import NavTop from "./NavTop"


function Navbar() {
    return (
        <div className="flex flex-col pb-2">
            <NavTop discountCode='NEWBIE' hotline='0353.898.846' />
            <NavMid />
            <NavBottom />
        </div>
    )
}

export default Navbar
