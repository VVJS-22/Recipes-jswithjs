import RecipeList from './components/RecipeList'
import Recipe from "./components/Recipe"
import IncredientList from "./components/IncredientList"
import Incredient from "./components/Incredient"
import './styles/app.css'
import { useRecipeContext } from './contexts/recipeContext'


function App() {

  const { recipes } = useRecipeContext()
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
                          {recipe.incredients.map(incredient => {
                            return <Incredient key={incredient.id} {...incredient} />
                          })}
                          </IncredientList>
                        </Recipe>
                    )
                })
            }
    </RecipeList>
    </>
  );
}

export default App;
