import React from 'react';

import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoArray: [],
      toDoName: '',
      toDoId: Date.now(),
      toDoCompleted: false
    }
  }

  toggleCompleted = id => {
    this.setState(prevState => {
      return {
        toDoArray: prevState.toDoArray.map(item => {
          if (item.toDoId === id) {
            console.log(item.toDoId)
            console.log(id)
            return {
              ...item,
              toDoCompleted: !item.toDoCompleted
            };
          } else {
            return item;
          }
        })
      }
    })
  }

  addToDo = event => {
    event.preventDefault();

    const newToDo = {
      toDoName: this.state.toDoName,
      toDoId: this.state.toDoId,
      toDoCompleted: this.state.toDoCompleted
    };

    this.setState(prevState => {
      return {
        toDoArray: [...prevState.toDoArray, newToDo],
        toDoName: '',
        toDoId: Date.now(),
        toDoCompleted: false
      }
    });
  };

  clearCompleted = event => {
    this.setState({
      toDoArray: this.state.toDoArray.filter(item => item.toDoCompleted === false)})
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Everything That Needs to be Done!</h2>
        <div className="todo-body">
          <div className="todo-list">
            <ToDoList toDoArray={this.state.toDoArray} toggleCompleted={this.toggleCompleted} />
          </div>
          <div className='input-form'>
            <TodoForm addToDo={this.addToDo} handleChanges={this.handleChanges} toDoName={this.state.toDoName} />
            <button onClick={this.clearCompleted}>Clear Completed</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
