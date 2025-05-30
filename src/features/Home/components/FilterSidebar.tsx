import { MdFilterListAlt } from 'react-icons/md'
import ButtonFilter from '../../../components/Filter/ButtonFilter'
import CheckboxFilter from '../../../components/Filter/CheckboxFilter'
import FilterItem from '../../../components/Filter/FilterItem'
import { formatter } from '../../../utils/tailwindMerge'

function FilterSidebar() {
    return (
        <div className='w-full h-fit
                        rounded-[.7rem]
                        bg-white
                        flex flex-col'>
            <div className='flex flex-row items-center justify-start gap-2 p-4
                            text-blue-700'>
                <MdFilterListAlt size={20} />
                <h1 className='font-semibold text-2xl'>Bộ Lọc</h1>
            </div>
            <hr className='w-full border-t-0 border-b border-[#c9c9c9]' />
            <FilterItem label='Danh sách sản phẩm'>
                <CheckboxFilter label='Lọc gió Động cơ - Air Filter' count='224' />
                <CheckboxFilter label='Lọc Nhiên liệu - Fuel Filter' count='200' />
                <CheckboxFilter label='Bộ lọc dầu' count='30' />
                <CheckboxFilter label='Chưa phân loại' count='10' />
                <CheckboxFilter label='Khác' count='25' />
            </FilterItem>
            <hr className='w-full border-t-0 border-b border-[#c9c9c9]' />
            <FilterItem label='Khoảng giá'>
                <ButtonFilter label={`Dưới ${formatter.format(100000)}`} />
                <ButtonFilter label={`${formatter.format(100000)} - ${formatter.format(300000)}`} />
                <ButtonFilter label={`${formatter.format(500000)} - ${formatter.format(500000)}`} />
                <ButtonFilter label={`Trên ${formatter.format(500000)}`} />
            </FilterItem>
            <hr className='w-full border-t-0 border-b border-[#c9c9c9]' />
            <FilterItem label='Thương hiệu'>
                <CheckboxFilter label='Borch' count='24' />
                <CheckboxFilter label='Huyndai' count='24' />
                <CheckboxFilter label='Audi' count='24' />
            </FilterItem>
            <hr className='w-full border-t-0 border-b border-[#c9c9c9]' />
            <FilterItem label='Năm sản xuất'>
                <CheckboxFilter label='2022' count='24' />
                <CheckboxFilter label='2023' count='24' />
                <CheckboxFilter label='2024' count='24' />
                <CheckboxFilter label='2025' count='24' />
            </FilterItem>
            <hr className='w-full border-t-0 border-b border-[#c9c9c9]' />
            <FilterItem label='Xuất xứ'>
                <CheckboxFilter label='Trung Quốc' count='24' />
                <CheckboxFilter label='Đức' count='24' />
                <CheckboxFilter label='Mỹ' count='24' />
            </FilterItem>

        </div>
    )
}

export default FilterSidebar
