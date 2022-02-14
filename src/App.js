import './App.css';
import { Heart } from './Heart';
import 'animate.css';
import { Component, useEffect, useState } from 'react';

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));



function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}
debugger

export function App() {
  const [displayAnswer, setDisplayAnswer] = useState(false)
  const [displayRest, setDisplayRest] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDisplayAnswer(true)
    }, 5000)
  }, [])
  return (
    <>
    <Heart></Heart>
    <h1><span className='red'>Amanda</span>, will you be my valentine?</h1>

    {displayAnswer && <>
      <button class="button animate__fadeIn" onClick={() => setDisplayRest(true)}>
        Yes
        <div class="button__horizontal"></div>
        <div class="button__vertical"></div>
      </button>
    </>}

    {displayRest && <>
      {
        Object.values(images).map((image) => {
          return <img src={image} />
        })
      }
    </>}
    
    </>
  );
}

export default App;
