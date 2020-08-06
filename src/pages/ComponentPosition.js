import React, {useState} from 'react'
import Counter from "../components/Counter"
import Comparison from "../components/Comparison"

export default function ComponentIdentity() {
  return (
    <Comparison>
      <Stable/>
      <Unstable/>
    </Comparison>
  )
}

function Stable() {
  let [total, setTotal] = useState(0)
  let incrementTotal = () => setTotal(1 + total)
  let isLucky = (0 < total) && (0 === total % 5)
  return (
    <div className="CounterPair vertical">
      <p>{total}</p>
      <div>
        <Counter label="A1" onIncrement={incrementTotal}/>
        {isLucky && <p className="Lucky">Lucky!</p>}
        <Counter label="B1" onIncrement={incrementTotal}/>
      </div>
    </div>
  )
}

function Unstable() {
  let [total, setTotal] = useState(0)
  let incrementTotal = () => setTotal(1 + total)
  let isLucky = (0 < total) && (0 === total % 5)
  if (isLucky) return (
    <div className="CounterPair vertical">
      <p>{total}</p>
      <div>
        <Counter label="A2" onIncrement={incrementTotal}/>
        <p className="Lucky">Lucky!</p>
        <Counter label="B2" onIncrement={incrementTotal}/>
      </div>
    </div>
  )
  else return (
    <div className="CounterPair vertical">
      <p>{total}</p>
      <div>
        <Counter label="A2" onIncrement={incrementTotal}/>
        <Counter label="B2" onIncrement={incrementTotal}/>
      </div>
    </div>
  )
}