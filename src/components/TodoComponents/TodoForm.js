import React from 'react';

class TodoForm extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.addToDo}>
                <input
                    placeholder="...todo"
                    onChange={this.handleChanges}
                    value={this.props.toDoName}
                    name="toDoName"
                />

                <button>Submit</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;