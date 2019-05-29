import React from 'react';

import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoArray: [{'toDoName': 'Make App'}],
      toDoName: '',
      toDoId: Date.now(),
      toDoCompleted: false
    }
  }

  addToDo = event => {
    event.preventDefault();

    const newToDo = {
      name: this.state.toDoName,
      id: this.state.toDoId,
      completed: this.state.toDoCompleted
    };

    this.setState({
      toDoArray: [...this.state.toDoArray, newToDo],
      toDoName: '',
      toDoId: Date.now(),
      toDoCompleted: false
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-list">
          <ToDoList toDoArray={this.state.toDoArray} />
        </div>
        <TodoForm addToDo={this.addToDo} handleChanges={this.handleChanges} toDoName={this.state.toDoName} />
      </div>
    );
  }
}

export default App;
