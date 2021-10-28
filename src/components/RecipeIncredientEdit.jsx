const RecipeIncredientEdit = ({ingredient}) => {
    return (
        <>
            <input 
            type="text" 
            autoComplete="none"
            value={ingredient.name}
            />
            <input 
            type="text" 
            autoComplete="none"
            value={ingredient.amount}
            />
            <button>&times;</button>
        </>
    )
}

export default RecipeIncredientEdit
