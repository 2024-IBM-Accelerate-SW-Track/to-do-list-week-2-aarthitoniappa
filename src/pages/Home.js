import React, { Component } from 'react';
import Todos from '../component/todos'; 
import AddTodo from '../component/AddTodo'; 
import './Home.css'; 

class Home extends Component {
  // A default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: [], 
      showImage: false 
    };
  }

  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    // Check if the task already exists in the todo list
    const exists = this.state.todos.find(t => t.content === todo.content);
    
    if (exists) {
      // Task already exists, do nothing and return
      return;
    }

    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.
    todo.id = Math.random();
    // An array that contains the current array and the new todo item
    let new_list = [...this.state.todos, todo];
    // Updates the local state with the new array.
    this.setState({
      todos: new_list,
      showImage: true
    });

    setTimeout(() => {
      this.setState({ showImage: false });
    }, 2000);
  };

  deleteTodo = (id) => {
    const new_list = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: new_list
    });
  };

  render() {
    return (
      <div className="Home">
         <h1>Todo List</h1>
         <AddTodo addTodo={this.addTodo} />
         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
         {this.state.showImage && (
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2FmZjVyenR1eDhmcjIxc2Z3OWphcm1hODZpNWJyeHpnY2YzdmQ1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRQSNJRFAV5fsGI/giphy.gif"
            alt="Frustrated GIF"
            style={{ marginTop: '15px', width: '45%', maxWidth: '300px' }}
          />
        )}
      </div>
    );
  }
}

export default Home;
