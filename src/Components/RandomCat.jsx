import { useState, useEffect } from 'react';

function RandomCat({ flag }) {
  const [catUrl, setCatUrl] = useState('');
  
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((cats) => setCatUrl(cats[0].url));  
    return () => {
      
    };
  }, []);
    
  return catUrl ? <img width="200" height="200" scr={catUrl} /> : 'loading';
}

export default RandomCat;
