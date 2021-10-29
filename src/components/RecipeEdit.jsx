import RecipeIncredientEdit from "./RecipeIncredientEdit"
import '../styles/recipe-edit.css'
import { useRecipeContext } from "../contexts/recipeContext"



const RecipeEdit = ({recipe}) => {
    const { handleChange } = useRecipeContext()

    const handleInnerChange = (changes) => {
        handleChange(recipe.id, {...recipe, ...changes})
    }

    const handleIngredientChange = (id, ingredient) => {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient
        handleInnerChange({ ingredients: newIngredients})
    }

    return (
        <section style={{
            backgroundColor: "blue"
        }}>
            <div
                className="section__remove-button-container"
            
            >
                <button>&times;</button>
            </div>
            <form>

                <input
                type="text" 
                placeholder="Name" 
                autoComplete="none"
                id='name'
                name='name'
                value={recipe.name}
                onChange={e => handleInnerChange({
                    name: e.target.value
                })}
                />

                <input 
                type="text" 
                placeholder="Cook time" autoComplete="none"
                value={recipe.cookTime}
                onChange={e => handleInnerChange({
                    cookTime: e.target.value
                })}
                />
                <input 
                type="number" 
                min="1" 
                placeholder="Servings" 
                autoComplete="off"
                value={recipe.servings}
                onChange={e => handleInnerChange({
                    servings: e.target.value
                })}
                />
                <textarea 
                name="instructions" 
                id="instructions" placeholder="Instructions" autoComplete="off"
                value={recipe.instructions}
                onChange={e => handleInnerChange({
                    instructions: e.target.value
                })}
                ></textarea>
                <br />
                <label>Incredients</label>
                <div>
                    {recipe.ingredients.map(
                        ingredient =>  (
                            <>
                            <div>Name</div>
                            <div>Amount</div>
                            <RecipeIncredientEdit
                            key={ingredient.id}
                            ingredient={ingredient}
                            handleIngredientChange = {handleIngredientChange}
                            />
                            </>
                            )
                    )}
                </div>
                <div>
                    <button>Add Incredient</button>
                </div>
            </form>
        </section>
    )
}

export default RecipeEdit
