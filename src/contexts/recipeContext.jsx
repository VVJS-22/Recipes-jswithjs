import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import sampleRecipes from '../DB/recipeDB'

const RecipeContext = createContext(null)

export const RecipeProvider = ({children}) => {
    const [recipes, setRecipes] = useState(sampleRecipes)
    const [selectedRecipeId, setSelectedRecipeId] = useState()
    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

    const  LOCAL_STORAGE_KEY = 'recipeApp.recipes'

    useEffect(() => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)

        if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
    },[])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    },[recipes])

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

    const handleRecipeSelect = (id) => {
        setSelectedRecipeId(id)
    }

    const recipeContextValue = {
        recipes,
        selectedRecipe,
        handleAdd,
        handleDelete,
        handleRecipeSelect
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
