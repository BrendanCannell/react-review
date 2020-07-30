import React, {useState} from 'react';
import './App.css';

function App() {
  console.log("rendering: App")
  let [count, setCount] = useState(0)
  function incrementIfEven(childCount) {
    let isEven = 0 === childCount % 2
    if (isEven) {
      console.log("incrementing: App")
      setCount(count + 1)
    }
  }
  return (
    <div>
      <p>Even Clicks: {count}</p>
      <Counter label="A" onIncrement={incrementIfEven} />
      <Counter label="B" onIncrement={incrementIfEven} />
    </div>
  );
}

function Counter(props) {
  console.log("rendering: Counter " + props.label)
  let {label, onIncrement} = props
  let [count, setCount] = useState(0)
  function increment() {
    console.log("incrementing: Counter " + props.label)
    setCount(count + 1)
    onIncrement(count + 1)
  }
  return <button onClick={increment}>{label}: {count}</button>
}

export default App;
