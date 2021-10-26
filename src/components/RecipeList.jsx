import { useRecipeContext } from '../contexts/recipeContext'


const RecipeList = ({children}) => {
    const { handleAdd } = useRecipeContext()
    return (
        <div className="recipe-list">
            <div>
                {children}
            </div>
            <div>
                <button
                className="add"
                onClick={handleAdd}
                >
                    Add Recipe
                </button>
            </div>
        </div>
        
    )
}

export default RecipeList
