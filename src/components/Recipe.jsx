import IncredientList from "./IncredientList"

const Recipe = (props) => {
    const {
        name,
        servings,
        cookTime,
        instructions,
        incredients
    } = props
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
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
            <div>
                <span>Incredients:</span>
                <div>
                    <IncredientList incredients={incredients}/>
                </div>
            </div>
        </div>
    )
}

export default Recipe
