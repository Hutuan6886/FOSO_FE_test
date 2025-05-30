import ButtonSort from "../../../components/Sort/ButtonSort"
import SelectSort from "../../../components/Sort/SelectSort"
import { useSortList } from "../../../hooks/useSortList"

function Sort() {
    const { sortList, toggleSort } = useSortList()
    console.log(sortList);

    return (
        <div className="flex flex-row items-center justify-start gap-4">
            <h3>Sắp xếp theo:</h3>
            <div className="flex flex-row items-center gap-4">
                <ButtonSort label="Liên quan" sortList={sortList} setSortList={toggleSort} />
                <ButtonSort label="Bán chạy" sortList={sortList} setSortList={toggleSort} />
                <ButtonSort label="Mới nhất" sortList={sortList} setSortList={toggleSort} />
                <ButtonSort label="Nổi bật" sortList={sortList} setSortList={toggleSort} />
            </div>
            <SelectSort />
        </div>
    )
}

export default Sort
