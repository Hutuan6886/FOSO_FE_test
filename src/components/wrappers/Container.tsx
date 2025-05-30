import { cn } from "../../utils/tailwindMerge"

interface ContainerProps {
    children: React.ReactNode
    backgroundColor?: string
    className?: string
}
function Container({ children, backgroundColor, className }: ContainerProps) {
    return (
        <div className={`w-full h-auto py-1
                        ${backgroundColor}`}>
            <div className={cn(`w-[80%] m-auto
                                    `, className)}>
                {children}
            </div>
        </div>
    )
}

export default Container
