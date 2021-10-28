import RecipeIncredientEdit from "./RecipeIncredientEdit"
import '../styles/recipe-edit.css'



const RecipeEdit = ({recipe}) => {
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
                />

                <input 
                type="text" 
                placeholder="Cook time" autoComplete="none"
                value={recipe.cookTime}
                />
                <input 
                type="number" 
                min="1" 
                placeholder="Servings" 
                autoComplete="off"
                value={recipe.servings}
                />
                <textarea 
                name="instructions" 
                id="instructions" placeholder="Instructions" autoComplete="off"
                value={recipe.instructions}
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
