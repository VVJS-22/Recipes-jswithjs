import RecipeIncredientEdit from "./RecipeIncredientEdit"
import '../styles/recipe-edit.css'
import { useRecipeContext } from "../contexts/recipeContext"
import { v4 as uuidv4 } from 'uuid'



const RecipeEdit = ({recipe}) => {
    const { handleChange, handleSelect } = useRecipeContext()

    const handleInnerChange = (changes) => {
        handleChange(recipe.id, {...recipe, ...changes})
    }

    const handleIngredientChange = (id, ingredient) => {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient
        handleInnerChange({ ingredients: newIngredients})
    }

    const handleIngredientAdd = () => {
        const newIngredient = {
            id: uuidv4(),
            name:  '',
            amount: ''
        }
        handleInnerChange({ingredients: [...recipe.ingredients, newIngredient]})
    }

    const handleIngredientDelete = (id) => {
        handleInnerChange({
            ingredients: recipe.ingredients.filter(i => i.id !== id)
        })
    }

    return (
        <section style={{
            backgroundColor: "#fff"
        }}>
            <div
                className="section__remove-button-container"
            
            >
                <button
                onClick = { () => handleSelect(undefined)}
                >&times;</button>
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
                            handleIngredientDelete = {
                                handleIngredientDelete
                            }
                            />
                            </>
                            )
                    )}
                </div>
                <div>
                    <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleIngredientAdd()
                    }
                    }
                    >Add Incredient</button>
                </div>
            </form>
        </section>
    )
}

export default RecipeEdit
