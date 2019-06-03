import React from 'react';

const Todo  = props => {
        return (
            <div
                className={`item${props.toDoProp.toDoCompleted ? ' completed' : ''}`}
                onClick={() => props.toggleCompleted(props.toDoProp.toDoId)}
            >
                    <p>{props.toDoProp.toDoName}</p>
            </div>

        )
}

export default Todo;