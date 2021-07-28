import React from "react";
import TodoItem from "./TodoItem";
import todos from "./todos";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      todosData: todos,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Inside handleChange");
    this.setState((prevState) => {
      console.log("Inside handleChange -> setState");
      const updatedTodos = prevState.todosData.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
          console.log("Inside handleChange -> setState -> if statement");
          console.log(todo.checked);
          console.log(todo);
        }
        return todo;
      });
      return {
        todosData: updatedTodos,
      };
    });
  }

  render() {
    const todoList = this.state.todosData.map((item) => (
      <TodoItem
        key={item.id}
        listItem={item}
        handleChange={this.handleChange}
      />
    ));
    return <div>{todoList}</div>;
  }
}

export default Home;
