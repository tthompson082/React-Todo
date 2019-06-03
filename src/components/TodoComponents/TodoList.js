// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo'

const ToDoList = props => {
        return (
            <div>
                {props.toDoArray.map(toDo =>(
                    <Todo
                        toDoProp={toDo} 
                        key={toDo.toDoId}
                        toggleCompleted={props.toggleCompleted}
                    />
                ))}
            </div>
        );
}

export default ToDoList;