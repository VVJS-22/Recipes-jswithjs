import RecipeList from './components/RecipeList'
import sampleRecipes from './DB/recipeDB'
import './styles/app.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  const handleAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: "0:30",
      instructions: 'Instructions',
      incredients: [
        {
          id: uuidv4,
          name: 'Name',
          amount: '1 Tbs'
        }
      ]
    }

    setRecipes([...recipes, newRecipe])
    console.log(recipes)
  }

  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }


  return (
    <>
    <RecipeList recipes={recipes} handleAdd={handleAdd} handleDelete = {handleDelete}/>
    </>
  );
}

export default App;
