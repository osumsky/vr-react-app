import { useState, useEffect } from 'react';


function RandomCat({ flag, setFlag }) {
  const [catUrl, setCatUrl] = useState('');

  useEffect(() => {
    if (flag === 'pending') {
      fetch('https://api.thecatapi.com/v1/images/search')
        // fetch('https://ap')
        .then((response) => response.json())
        .then((cats) => {
          setCatUrl(cats[0].url);
          setFlag('fetched');
        })
        .catch((e) => {
          console.log('Error on fetching data');
        });
    }
  }, [flag]);

  return (
    <>
      {catUrl ? <img width="200" height="200" src={catUrl} /> : null}
      {flag === 'pending' ? 'loading' : null}
    </>
  );
}

export default RandomCat;
