import React from "react";
import "../../styles/todo-list.scss";
import "./TodoListTop";
import TodoListTop from "./TodoListTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TodoList extends React.Component {
  state = {
    todoList: [
      { id: "A1", title: "Learning Reactjs" },
      { id: "B2", title: "Practice Sport" },
      { id: "C3", title: "Watching Youtube" },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      todoList: [...this.state.todoList, todo],
    });
  };

  render() {
    let { todoList } = this.state;
    return (
      <div className="todo-list">
        <TodoListTop addNewTodo={this.addNewTodo} />
        <div className="todo-list__bottom">
          {todoList &&
            todoList.length > 0 &&
            todoList.map((item, index) => {
              return (
                <div key={item.id} className="todo-list__item">
                  <span>
                    {index + 1}. {item.title}
                  </span>
                  <div>
                    <button className="todo-list__edit" type={"button"}>
                      Edit
                    </button>
                    <button className="todo-list__delete" type={"button"}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default TodoList;
