import React from 'react';

import ToDoList from './components/TodoComponents/TodoList'

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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-list">
          <ToDoList toDoArray={this.state.toDoArray} />
        </div>
      </div>
    );
  }
}

export default App;
