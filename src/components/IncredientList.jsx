import Incredient from "./Incredient"


const IncredientList = ({incredients}) => {

    const incredientItems = incredients.map(incredient => {
        return <Incredient key={incredient.id} {...incredient} />
    })
    return (
        <div>
            {incredientItems}
        </div>
    )
}

export default IncredientList
