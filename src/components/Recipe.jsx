import { useRecipeContext } from "../contexts/recipeContext"


const Recipe = (props) => {
    const { handleDelete } = useRecipeContext()
    const {
        id,
        name,
        servings,
        cookTime,
        instructions,
        children
    } = props
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <button className="edit">Edit</button>
                <button
                
                className="delete"
                onClick={() => {
                    handleDelete(id)
                }}
                >
                    Delete
                </button>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings:</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Insructions:</span>
                <div>{instructions}</div>
            </div>
            <div>
                <span>Incredients:</span>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Recipe
