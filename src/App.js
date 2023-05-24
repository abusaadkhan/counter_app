import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[counter,setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter+1)
  }
  const decreaseCounter = () => {
    if(counter>0){
      setCounter(counter-1)
    }
  }
  const clearState = () => {
    setCounter(0)
  }
  return (
    <div className="App" style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}} >
      <div style={{padding:'10px'}} >
        <button onClick={increaseCounter} >increament</button>
        <span style={{padding:'0px 10px'}} >{counter}</span>
        <button onClick={decreaseCounter} >decreament</button>
      </div>
      <button onClick={clearState} style={{display:'block'}} >clear</button>

    </div>
  );
}

export default App;
