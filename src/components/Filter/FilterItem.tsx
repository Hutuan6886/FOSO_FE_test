import React, { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa6'

interface FilterItemProps {
    label: string
    children: React.ReactNode
}
function FilterItem({ label, children }: FilterItemProps) {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className='flex flex-col items-start gap-3 p-4 overflow-hidden'>
            <div className='w-full flex flex-row items-center justify-between cursor-pointer' onClick={() => setOpen(!open)}>
                <h3 className='text-[1.3rem] font-semibold'>{label}</h3>
                <FaAngleUp className={`${open ? '' : 'rotate-180'} transition duration-300`} />
            </div>
            {open && children}
        </div>
    )
}

export default FilterItem
