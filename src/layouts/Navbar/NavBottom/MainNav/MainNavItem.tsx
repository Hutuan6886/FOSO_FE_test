
interface MainNavItemProps {
    label: string
    icon?: React.ReactElement
}
function MainNavItem({ label, icon }: MainNavItemProps) {
    return (
        <div className="flex flex-row items-center gap-2 p-2 cursor-pointer">
            {icon}
            <h3 className="hover:text-blue-700 transition">{label}</h3>
        </div>
    )
}

export default MainNavItem
