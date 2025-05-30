import { categories } from '../../../../../data'

interface CategoriesListProps {
    handleMouseEnter: (id: string) => void
    hoveredCategoryId: string
    setHoveredCategoryId: (id: string) => void
}

function CategoriesList({ handleMouseEnter, hoveredCategoryId, setHoveredCategoryId }: CategoriesListProps) {

    return (
        <div className="flex flex-col items-start justify-center">
            {categories.map((category) => (
                <button key={category.id} className={`w-full h-full p-3
                                            flex flex-row items-center justify-between
                                            cursor-pointer
                                            ${hoveredCategoryId === category.id ? "bg-[#f5f5f5]" : "bg-white"}`}
                    onMouseEnter={() => {
                        handleMouseEnter(category.id)
                        setHoveredCategoryId(category.id)
                    }}>
                    <div className="flex flex-row items-center justify-start gap-3">
                        <img src={category.image} alt={category.image} className="size-15" />
                        <h3>{category.name}</h3>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default CategoriesList
