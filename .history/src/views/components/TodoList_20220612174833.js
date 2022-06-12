import React from "react";
import "../../styles/todo-list.scss";
class TodoList extends React.Component {
  state = {
    todoList: [
      { id: "A1", title: "Learning Reactjs" },
      { id: "B2", title: "Practice Sport" },
      { id: "C3", title: "Watching Youtube" },
    ],
  };

  //   handleOnChangeAdd = (event) => {
  //     console.log(event.target.value);
  //   };

  render() {
    let { todoList } = this.state;
    return (
      <div className="todo-list">
        <div className="todo-list__top">
          <input
            type={"text"}
            // onChange={(event) => this.handleOnChangeAdd(event)}
          />
          <button className="todo-list__add" type={"button"}>
            Add
          </button>
        </div>
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
