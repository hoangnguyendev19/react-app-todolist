import logo from "./logo.svg";
import "./App.scss";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Todo List App With Chris Nguyen</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
