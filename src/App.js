import './App.css';
import { Heart } from './Heart';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));
const videos = importAll(require.context('../assets', false, /\.(mp4)$/));

const assets = Object.values(images).concat(Object.values(videos))
function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

function pageScroll() {
  setInterval(() => {
    window.scrollBy(0, 10); // horizontal and vertical scroll increments
  }, 100); // scrolls every 100 milliseconds
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

export function App() {
  const [displayAnswer, setDisplayAnswer] = useState(false)
  const [displayRest, setDisplayRest] = useState(false)

  useEffect(() => {
    shuffleArray(assets)
    setTimeout(() => {
      setDisplayAnswer(true)
    }, 5000)
  }, [])
  useEffect(() => {
    pageScroll()
  }, [displayRest])
  return (
    <>
    <Heart></Heart>
    <h1><span className='red'>Amanda</span>, will you be my valentine?</h1>

    {displayAnswer && <>
      <button className="button animate__fadeIn" onClick={() => setDisplayRest(true)}>
        Yes
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
      </button>
    </>}

    {displayRest && <>
        <div className="single-column">
          {
            assets.map((asset) => {
              if(asset.endsWith('mp4')) {
                return <video autoPlay={true} loop={true} muted={true}>
                  <source src={asset} type="video/mp4"></source>
                </video>
              }
              else {
                return <img src={asset} alt='Amanda' />
              }
                
            })
          }
        </div>
      
    </>}
    
    </>
  );
}

export default App;
