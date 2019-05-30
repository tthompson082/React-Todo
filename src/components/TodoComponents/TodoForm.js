import React from 'react';

class TodoForm extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.addToDo}>
                <input
                    className="input-box"
                    placeholder="...todo"
                    onChange={this.props.handleChanges}
                    value={this.props.toDoName}
                    name="toDoName"
                />

                <button>Submit</button>
            </form>
        )
    }
}

export default TodoForm;