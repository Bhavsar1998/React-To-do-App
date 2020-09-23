import React from 'react'


function resetPlan(props) {
    return (
        <div>
            <button onClick={props.deleteTodoList} type="button" class="btn btn-secondary btn-lg btn-block" >Reset Your Plan </button>
        </div >
    )
}

//const reseytStyle

export default resetPlan