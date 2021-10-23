import Recipe from "./Recipe"


const RecipeList = ({
    recipes,
    handleAdd,
    handleDelete
}) => {
    return (
        <div className="recipe-list">
            <div>
            {
                recipes.map(recipe => {
                    return(
                        <Recipe 
                            key={recipe.id}
                            handleDelete = {handleDelete}
                            {...recipe}
                        />

                    )
                })
            }
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
