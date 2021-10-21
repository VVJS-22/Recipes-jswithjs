import RecipeList from './RecipeList'
import sampleRecipes from './DB/recipeDB'

function App() {
  return (
    <>
    {console.log(sampleRecipes)}
    <RecipeList recipes={sampleRecipes}/>
    </>
  );
}

export default App;
