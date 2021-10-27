import RecipeIncredientEdit from "./RecipeIncredientEdit"
import '../styles/recipe-edit.css'

const RecipeEdit = () => {
    return (
        <section>
            <div
                className="section__remove-button-container"
            
            >
                <button>&times;</button>
            </div>
            <form>
                <input type="text" placeholder="Name" autoComplete="none"/>
                <input type="text" placeholder="Cook time" autoComplete="none"/>
                <input type="number" min="1" placeholder="Servings" autoComplete="off"/>
                <textarea name="instructions" id="instructions" placeholder="Instructions" autoComplete="off"></textarea>
                <br />
                <label>Incredients</label>
                <div>
                    <div>Name</div>
                    <div>Amount</div>
                    <div></div>
                    <RecipeIncredientEdit />
                </div>
                <div>
                    <button>Add Incredient</button>
                </div>
            </form>
        </section>
    )
}

export default RecipeEdit
