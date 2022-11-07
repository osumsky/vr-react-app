import './App.css';
import user from './user.json';

export default function App() {
  return (
    <main
      onClick={(e) => {
        console.log('main');
        console.log(e.target);
        console.log(e.currentTarget);
      }}
      onClickCapture={(e) => {
        // e.stopPropagation();
        console.log('main (on capturing)');
      }}
    >
      <form
        onClick={(e) => {
          console.log('form');
        }}
      >
        <label
          onClick={(e) => {
            e.preventDefault();
            console.log('label');
          }}
        >
          field
          <input type="text" />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log('onSubmit');
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
