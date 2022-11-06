import './App.css';
import user from './user.json';

function Greeting(props) {
  const { name } = props;
  return <h1 className="greeting">Hello. {name}. Welcome!</h1>;
}

export default function App() {
  return <Greeting name="Oleg" />;
}
