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

  handleAddNewTodo = () => {
    if (!this.state.title) {
      alert("Missing data");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100 + 1),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
  };

  render() {
    return (
      <div className="todo-list__top">
        <input
          type={"text"}
          onChange={(event) => this.handleOnChangeAdd(event)}
          value={this.state.title}
        />
        <button className="todo-list__add" type={"button"}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoListTop;
