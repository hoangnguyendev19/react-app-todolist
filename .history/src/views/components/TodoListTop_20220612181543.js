import React from "react";
import { toast } from "react-toastify";
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
      toast.error("Missing error!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100 + 1),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
    toast.success("Wow so easy!");
  };

  render() {
    return (
      <div className="todo-list__top">
        <input
          type={"text"}
          onChange={(event) => this.handleOnChangeAdd(event)}
          value={this.state.title}
        />
        <button
          className="todo-list__add"
          type={"button"}
          onClick={() => this.handleAddNewTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default TodoListTop;
