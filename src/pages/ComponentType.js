import React, {useState} from 'react'
import Counter from "../components/Counter"
import Comparison from "../components/Comparison"

export default function ComponentIdentity() {
  return (
    <Comparison>
      <Consistent/>
      <Inconsistent/>
    </Comparison>
  )
}

function Consistent() {
  let [total, setTotal] = useState(0)
  let incrementTotal = () => setTotal(1 + total)
  let counterA = <Counter label="A1" key="A1" onIncrement={incrementTotal}/>
  let counterB = <Counter label="B1" key="B1" onIncrement={incrementTotal}/>
  // Swap A and B every five clicks
  return (
    0 === Math.floor(total / 5) % 2
      // A B
      ? <div className="CounterPair vertical">
          <p>{total}</p>
          <div>
            {counterA}
            {counterB}
          </div>
        </div>
      // B A
      : <div className="CounterPair vertical">
          <p>{total}</p>
          <div>
            {counterB}
            {counterA}
          </div>
        </div>
  )
}

function Inconsistent() {
  let [total, setTotal] = useState(0)
  let incrementTotal = () => setTotal(1 + total)
  let counterA = <Counter label="A2" onIncrement={incrementTotal}/>
  let counterB = <Counter label="B2" onIncrement={incrementTotal}/>
  // Swap A and B every five clicks
  return (
    0 === Math.floor(total / 5) % 2
    // A B
    ? <div className="CounterPair vertical">
        <p>{total}</p>
        <div>
          {counterA}
          {counterB}
        </div>
      </div>
    // B A
    : <span className="CounterPair vertical">
        <p>{total}</p>
        <div>
          {counterB}
          {counterA}
        </div>
      </span>
  )
}