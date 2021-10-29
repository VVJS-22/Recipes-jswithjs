const RecipeIncredientEdit = ({
    ingredient,
    handleIngredientChange
}) => {
    const handleInnerChange = (changes) => {
        handleIngredientChange(ingredient.id, {...ingredient, ...changes})
    }

    return (
        <>
            <input 
            type="text" 
            autoComplete="none"
            value={ingredient.name}
            onChange={e => handleInnerChange({
                name: e.target.value
            })}
            />
            <input 
            type="text" 
            autoComplete="none"
            value={ingredient.amount}
            onChange={e => handleInnerChange({
                amount: e.target.value
            })}
            />
            <button>&times;</button>
        </>
    )
}

export default RecipeIncredientEdit
