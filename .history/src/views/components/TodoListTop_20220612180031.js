import React from "react";

class TodoListTop extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeAdd = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  render() {
    return (
      <div className="todo-list__top">
        <input
          type={"text"}
          onChange={(event) => this.handleOnChangeAdd(event)}
          value={this.state}
        />
        <button className="todo-list__add" type={"button"}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoListTop;
