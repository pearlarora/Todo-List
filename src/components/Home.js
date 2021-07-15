import React from "react";
import TodoItem from "./TodoItem";

function Home() {
  return (
    <div>
      <h1>Your Todo List</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default Home;
