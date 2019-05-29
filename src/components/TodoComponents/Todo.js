import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <p>{this.props.toDoProp.toDoName}</p>
        )
    }
}

export default Todo;