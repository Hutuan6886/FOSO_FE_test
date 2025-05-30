
interface CheckboxFilterProps {
    label: string
    count: string
}
function CheckboxFilter({ label, count }: CheckboxFilterProps) {
    return (
        <div className='flex flex-row items-center justify-start gap-2'>
            <input type="checkbox" />
            <p className='text-[.9rem]'>{label} <span>({count})</span></p>
        </div>
    )
}

export default CheckboxFilter
