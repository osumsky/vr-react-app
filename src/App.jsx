import { useState } from 'react';
import './App.css';
import Greeting from './Components/Greeting';
import RandomCat from './Components/RandomCat';
import Counter from './Components/Counter';

function App() {
  const [flag, setFlag] = useState('pending');

  const like = () => {
    console.log('liked');
    setFlag('liked');
  };
  const dislike = () => {
    console.log('disliked');
    setFlag('pending');
  };

  return (
    <main>
      <h1>Do you like this cat?</h1>
      <RandomCat flag={flag} setFlag={setFlag} />

      {flag === 'fetched' || flag === 'pending' ? (
      <div>
        <button type="button" onClick={like}>
          Like
        </button>
        <button type="button" onClick={dislike}>
          Dislike
        </button>
      </div>) : null}

      {flag === 'liked' ? <p>Liked!</p> : null}
    </main>
  );
}

export default App;
