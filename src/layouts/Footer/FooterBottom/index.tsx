import { IoLogoGooglePlaystore } from "react-icons/io5"
import Container from "../../../components/wrappers/Container"
import { SiApple } from "react-icons/si"
import Language from "../../Navbar/NavMid/Language"

const company = {
    label: 'VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY',
    info: [{
        name: 'Tax code:',
        value: '0908789426'
    }, {
        name: 'Address:',
        value: '523 Do Xuan Hop, Phuoc Long B Ward, Ho Chi Minh City, Vietnam'
    }, {
        name: 'Phone number:',
        value: '0285.345.7789'
    }, {
        name: 'Opening hour:',
        value: '09:00 - 22:00 from Mon - Fri'
    }]
}
const sitemap = {
    label: "Sitemap",
    info: [{
        name: 'About',
        href: '#'
    }, {
        name: 'Article',
        href: '#'
    }, {
        name: 'Cart',
        href: '#'
    }, {
        name: 'Contact',
        href: '#'
    }]
}
const legal = {
    label: "Legal",
    info: [{
        name: 'Privacy policy',
        href: '#'
    }, {
        name: 'Cookie policy',
        href: '#'
    }, {
        name: 'Delivery policy',
        href: '#'
    }, {
        name: 'FAQs',
        href: '#'
    },]
}
const downloadApp = {
    label: 'Download app',
    info: [{
        icon: <IoLogoGooglePlaystore size={20} />,
        color: 'bg-gray-900',
        action: 'Get it on',
        name: 'Google Play Store',
    }, {
        icon: <SiApple size={20} />,
        color: 'bg-blue-700',
        action: 'Download from',
        name: 'Apple App Store',
    }]
}
function index() {
    return (
        <div className="bg-white py-20">
            <Container className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col items-start gap-5">
                        <h3 className="text-blue-900 font-semibold">{company.label}</h3>
                        <div className="flex flex-col items-start gap-1">
                            {company.info.map((item, i) => (
                                <div key={i} className="flex flex-row items-center justify-start gap-2
                                                    text-[.9rem]">
                                    <p className="text-[#999999]">{item.name}</p>
                                    <p className="text-blue-900">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <h3 className="text-[1.2rem] text-blue-900 font-semibold">{sitemap.label}</h3>
                        <div className="flex flex-col items-start gap-1">
                            {sitemap.info.map((item, i) => (
                                <a key={i} href={item.href} className="text-[#999999]">{item.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <h3 className="text-[1.2rem] text-blue-900 font-semibold">{legal.label}</h3>
                        <div className="flex flex-col items-start gap-1">
                            {legal.info.map((item, i) => (
                                <a key={i} href={item.href} className="text-[#999999]">{item.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <h3 className="text-[1.2rem] text-blue-900 font-semibold">{downloadApp.label}</h3>
                        <div className="flex flex-col items-start gap-3">
                            {downloadApp.info.map((item, i) => (
                                <button key={i} className={`w-full flex flex-row items-center justify-center gap-5
                                                            px-5 py-2 rounded-[.7rem] cursor-pointer
                                                            text-white ${item.color}`}>
                                    {item.icon}
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-xs">{item.action}</p>
                                        <p className="text-[.9rem]">{item.name}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740" alt="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740" className="size-20"/>
                    <Language />
                </div>
            </Container>
        </div>
    )
}

export default index
