import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState('open')

  const changeButtonStatus = () => {
    console.log('button clicked')
    status == 'open' ? setStatus('close') : setStatus('open')
  }
  
  return (
    <div className="App">
      {status == 'open' ? <Button text='Click to subscribe!' onClick={changeButtonStatus}/> : <p>Thank you for subscribing!</p> }
    </div>
  );
}

export default App;
