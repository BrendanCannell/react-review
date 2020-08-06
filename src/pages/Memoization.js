import React, {useState, useCallback} from 'react'
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
  // By using `setTotal` with a callback, `_incrementTotal` no longer depends on `total`.
  let _incrementTotal = () => setTotal((n) => 1 + n)
  let incrementTotal = useCallback(_incrementTotal, []) // no dependencies!
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

function WithValue() {
  let [total, setTotal] = useState(0)
  let _incrementTotal = () => setTotal(1 + total)
  let incrementTotal = useCallback(_incrementTotal, [total])
  let counterA = <Counter label="A2" key="A2" onIncrement={incrementTotal}/>
  let counterB = <Counter label="B2" key="B2" onIncrement={incrementTotal}/>
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