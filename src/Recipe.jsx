const Recipe = (props) => {
    const {
        name,
        servings,
        cookTime,
        instructions
    } = props
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings:</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Insructions:</span>
                <div>{instructions}</div>
            </div>
        </div>
    )
}

export default Recipe
