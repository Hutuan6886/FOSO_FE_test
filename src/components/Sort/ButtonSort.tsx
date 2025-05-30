
interface ButtonSortProps {
    label: string
    sortList: string[]
    setSortList: (sortList: string) => void
}
function ButtonSort({ label, sortList, setSortList }: ButtonSortProps) {

    return (
        <button className={`relative w-full px-4 py-1 
                           text-nowrap rounded-md cursor-pointer overflow-hidden
                           bg-white
                           ${sortList.includes(label) ? 'border border-blue-700 text-blue-700' : ''}`} onClick={() => setSortList(label)}>
            {sortList.includes(label) && <>
                <div className="before:absolute before:top-0 before:right-0
                            before:content-[''] 
                            before:-border-r-[8px] before:border-l-transparent 
                            before:border-l-[16px] before:border-r-transparent 
                            before:border-t-[16px] before:border-t-blue-700"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3
                                                            absolute top-0 right-0
                                                         text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                </svg>
            </>}
            {label}
        </button>
    )
}

export default ButtonSort
