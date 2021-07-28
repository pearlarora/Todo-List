import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "grey",
    textDecoration: "line-through",
  };

  return (
    <div className="list-item">
      <input
        type="checkbox"
        checked={props.listItem.checked}
        onChange={() => props.handleChange(props.listItem.id)}
      ></input>
      <p style={props.listItem.checked ? completedStyle : null}>
        {props.listItem.todo}
      </p>
    </div>
  );
}

export default TodoItem;
