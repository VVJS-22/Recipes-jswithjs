import RecipeList from './components/RecipeList'
import sampleRecipes from './DB/recipeDB'
import './styles/app.css'

function App() {
  return (
    <>
    {console.log(sampleRecipes)}
    <RecipeList recipes={sampleRecipes}/>
    </>
  );
}

export default App;
