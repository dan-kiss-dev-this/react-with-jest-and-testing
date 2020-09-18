import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>This is a counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
      
      <Button label="Click me" />
    </>
  );
}

export default App;
