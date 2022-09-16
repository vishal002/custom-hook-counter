import './App.css';
import { useState } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return [count, increment, decrement, reset]
}

function App() {
  const [count, increment, decrement, reset] = useCounter(0);
  return (
    <div className="App">
      <h1>counter value: {count}</h1>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
