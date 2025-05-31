import React from 'react'

interface ExploreInfoTagProps {
    label: string
    description: string
    icon: React.ReactElement
}
function ExploreInfoTag({ label, description, icon }: ExploreInfoTagProps) {
    return (
        <div className='w-full h-full p-4
                    bg-white
                    rounded-[.7rem] shadow-md
                        flex flex-row items-center justify-start gap-5'>
            <div className='p-3
                            rounded-[50px]
                            bg-[#e9e9e9]
                            flex flex-col items-center justify-center'>{icon}</div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-[1.1rem] font-semibold'>{label}</h3>
                <p className='text-[.9rem] text-[#999999]'>{description}</p>
            </div>
        </div>
    )
}

export default ExploreInfoTag
