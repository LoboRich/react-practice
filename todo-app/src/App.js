import './App.css';
import Title from './components/Title';
import List from './components/List';
import { useState } from 'react';

function App() {
  const [lists, setLists] = useState([
    {id: '1', text: 'First'},
    {id: '2', text: 'Second'}
  ])
  
  return (
    <div className="App">
      <Title text='Todo List'/>
      <List lists={lists}/>
    </div>
  );
}

export default App;
