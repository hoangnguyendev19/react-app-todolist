import React from "react";

class TodoList extends React.Component {
  state = {
    todoList: [
      { id: "A1", title: "Learning Reactjs" },
      { id: "B2", title: "Practice Sport" },
      { id: "C3", title: "Watching Youtube" },
    ],
  };
  render() {
    let { todoList } = this.state;
    return (
      <div className="todo-list">
        <div className="todo-list__top">
          <input type={"text"} value={""} />
          <button type={"button"}>Add</button>
        </div>
        <div className="todo-list__bottom">
          {todoList &&
            todoList.length > 0 &&
            todoList.map((item, index) => {
              <div key={item.id} className="todo-list__bottom-item">
                {index + 1}. {item.title}
              </div>;
            })}
        </div>
      </div>
    );
  }
}

export default TodoList;
