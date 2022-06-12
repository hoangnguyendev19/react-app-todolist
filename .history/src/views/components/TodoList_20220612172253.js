import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <div className="todo-list__top">
          <input type={"text"} value={""} />
          <button type={"button"}>Add</button>
        </div>
        <div className="todo-list__bottom"></div>
      </div>
    );
  }
}

export default TodoList;
