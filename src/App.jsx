import Counter from "./components/Counter";
import TaskForm from "./components/TaskForm";
import TodoList from "./components/TodoList";
import store from 'redux';


function App(props) {
  return (
    <>
      <Counter />
      <hr/>
      <TaskForm />
      <br/>
      <TodoList />
    </>
  );
}

export default App;
