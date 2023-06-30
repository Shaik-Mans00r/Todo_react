import React, { useState } from 'react';
import './App.css';

function App() {
  // State hook - 'use state'
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  //functions

  function addItem(){

    if (!newItem){
      alert('Enter a task');
      return
    }
    
    const item = {
      id: Math.floor(Math.random() *100),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);

    setNewItem('');
  }

function deleteItem(id){
  const newArr = items.filter((item) => item.id !==id);
  setItems(newArr);
}


  return (
    <div className="App">
     {/* 1. Header */}
     <h1> To-do List app</h1>

     {/* 2. Input (Input and button) */}
     <input type="text" contentEditable="true" placeholder='Add task here' value={newItem} onChange={e => setNewItem(e.target.value)}/>

     <button onClick={() => addItem()}> Add </button>

     {/* 3. List of items (unordered list with list items) */}

     <ul>

       {items.map(item => {
        return(
          <li key={item.id}> {item.value} <button onClick={() => deleteItem(item.id)}>Delete</button></li> 
        )
      })} 
      

     </ul>
    </div>
  );
}

export default App;
