import RecipeList from './components/RecipeList'
import Recipe from "./components/Recipe"
import IncredientList from "./components/IncredientList"
import Incredient from "./components/Incredient"
import RecipeEdit from './components/RecipeEdit'
import './styles/app.css'
import { useRecipeContext } from './contexts/recipeContext'


function App() {

  const { recipes, selectedRecipe } = useRecipeContext()
  return (
    <>
    <RecipeList>
    {
                recipes.map(recipe => {
                    return(
                        <Recipe 
                            key={recipe.id}
                            {...recipe}
                        >
                          <IncredientList>
                          {recipe.ingredients.map(ingredient => {
                            return <Incredient key={ingredient.id} {...ingredient} />
                          })}
                          </IncredientList>
                        </Recipe>
                    )
                })
            }
    </RecipeList>
    {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}

    </>
  );
}

export default App;
