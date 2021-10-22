import Recipe from "./Recipe"


const RecipeList = ({recipes}) => {
    return (
        <div className="recipe-list">
            <div>
            {
                recipes.map(recipe => {
                    return(
                        <Recipe 
                            key={recipe.id}
                            {...recipe}
                        />

                    )
                })
            }
            </div>
            <div>
                <button className="add">Add Recipe</button>
            </div>
        </div>
        
    )
}

export default RecipeList
