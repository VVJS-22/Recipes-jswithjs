import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import sampleRecipes from '../DB/recipeDB'

const RecipeContext = createContext(null)

export const RecipeProvider = ({children}) => {
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

    const recipeContextValue = {
        recipes,
        handleAdd,
        handleDelete
    }

    return (
        <RecipeContext.Provider value={recipeContextValue}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipeContext = () => {
    return useContext(RecipeContext)
}
