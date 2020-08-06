import React, {useState} from 'react'
import Counter from "../components/Counter"
import Comparison from "../components/Comparison"

export default function ComponentIdentity() {
  return (
    <Comparison>
      <UnnestedKey/>
      <NestedKey/>
    </Comparison>
  )
}

function UnnestedKey() {
  let [total, setTotal] = useState(0)
  let incrementTotal = () => setTotal(1 + total)
  let counterA =
    <div key="A">
      <Counter label="A1" onIncrement={incrementTotal}/>
    </div>
  let counterB =
    <span key="B">
      <Counter label="B1" onIncrement={incrementTotal}/>
    </span>
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

function NestedKey() {
  let [total, setTotal] = useState(0)
  let incrementTotal = () => setTotal(1 + total)
  let counterA =
    <div>
      <Counter key="A" label="A2" onIncrement={incrementTotal}/>
    </div>
  let counterB =
    <span>
      <Counter key="B" label="B2" onIncrement={incrementTotal}/>
    </span>
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