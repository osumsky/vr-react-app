import { useState } from 'react';
import './App.css';
import RandomCat from './Components/RandomCat';

function App() {
  const [flag, setFlag] = useState(false);
  const like = () => {
    console.log('liked');
    setFlag(true);
  };
  const dislike = () => {
    console.log('disliked');
    setFlag(false);
  };
  return (
    <main>
      <h1>Do you like this cat?</h1>
      <RandomCat flag={flag} />
      <div>
        <button type="button" onClick={like}>
          Like
        </button>
        <button type="button" onClick={dislike}>
          Dislike
        </button>
      </div>
    </main>
  );
}

export default App;
