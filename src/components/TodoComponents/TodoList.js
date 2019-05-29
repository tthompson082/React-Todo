// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo'

class ToDoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.toDoArray.map(toDo =>(
                    <Todo toDoProp={toDo} />
                ))}
            </div>
        );
    }
}

export default ToDoList;