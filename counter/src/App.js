import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  
  const add = () => {
    setCount(count+1)
  }

  const subtract = () => {
    setCount(count-1)
  }
  
  return (
    <div className="App">
      <button onClick={add}>+</button>
      <input type='number' value={count}/>
      <button onClick={subtract}>-</button>
    </div>
  );
}

export default App;
