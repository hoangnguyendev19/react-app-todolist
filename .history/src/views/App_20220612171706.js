import logo from "./logo.svg";
import "./App.scss";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Todo List App With Chris Nguyen</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
