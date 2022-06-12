import React from "react";

class TodoListTop extends React.Component {
  render() {
    return (
      <div className="todo-list__top">
        <input
          type={"text"}
          // onChange={(event) => this.handleOnChangeAdd(event)}
        />
        <button className="todo-list__add" type={"button"}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoListTop;
