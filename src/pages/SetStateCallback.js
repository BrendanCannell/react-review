import React, {useState} from 'react'
import Counter from "../components/Counter"
import Comparison from "../components/Comparison"

export default function ComponentIdentity() {
  return (
    <Comparison>
      <WithCallback/>
      <WithValue/>
    </Comparison>
  )
}

function WithCallback() {
  let [total, setTotal] = useState(0)
  let incrementTotal = () => setTotal((n) => 1 + n)
  let incrementTwice = () => {
    incrementTotal()
    incrementTotal()
  }
  let counterA = <Counter label="A1" key="A" onIncrement={incrementTwice}/>
  let counterB = <Counter label="B1" key="B" onIncrement={incrementTwice}/>
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

function WithValue() {
  let [total, setTotal] = useState(0)
  let incrementTotal = () => setTotal(1 + total)
  let incrementTwice = () => {
    incrementTotal()
    incrementTotal()
  }
  let counterA = <Counter label="A2" key="A" onIncrement={incrementTwice}/>
  let counterB = <Counter label="B2" key="B" onIncrement={incrementTwice}/>
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