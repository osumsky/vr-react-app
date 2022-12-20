import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TodoList from './components/TodoList';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App(props) {
  return (
    <>
      <UserForm />
      <UsersList />
      {/* <Counter />
      <hr/>
      <TaskForm />
      <br/>
      <TodoList /> */}
    </>
  );
}

export default App;
