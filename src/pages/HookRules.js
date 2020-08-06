import React, {useState} from 'react'
import Counter from "../components/Counter"
import Comparison from "../components/Comparison"

export default function StateIdentity() {
  return (
    <Comparison>
      <PlayingByTheRules/>
      <BreakingTheLaw/>
    </Comparison>
  )
}

function PlayingByTheRules() {
  let [total, setTotal] = useState(0)
  let isLucky = (0 < total) && (0 === total % 5)
  let [luckyScale, setLuckyScale] = useState(1)
  let [unluckyScale, setUnluckyScale] = useState(1)
  if (isLucky) {
    var rescale = () => setLuckyScale(1.2 * luckyScale)
    var scale = luckyScale
  }
  else {
    var rescale = () => setUnluckyScale(0.97 * unluckyScale)
    var scale = unluckyScale
  }
  let incrementTotalAndRescale = () => {
    setTotal(1 + total)
    rescale()
  }
  return (
    <div className="CounterPair vertical" style={{transform: `scale(${scale})`}}>
      <p>{total}</p>
      <div>
        <Counter label="A1" onIncrement={incrementTotalAndRescale}/>
        {isLucky && <p className="Lucky">Lucky!</p>} 
        <Counter label="B1" onIncrement={incrementTotalAndRescale}/>
      </div>
    </div>
  )
}

function BreakingTheLaw() {
  let [total, setTotal] = useState(0)
  let isLucky = (0 < total) && (0 === total % 5)
  if (isLucky) {
    let [luckyScale, setLuckyScale] = useState(1)
    var rescale = () => setLuckyScale(1.25 * luckyScale)
    var scale = luckyScale
  }
  else {
    let [unluckyScale, setUnluckyScale] = useState(1)
    var rescale = () => setUnluckyScale(0.97 * unluckyScale)
    var scale = unluckyScale
  }
  let incrementTotalAndRescale = () => {
    setTotal(1 + total)
    rescale()
  }
  return (
    <div className="CounterPair vertical" style={{transform: `scale(${scale})`}}>
      <p>{total}</p>
      <div>
        <Counter label="A2" onIncrement={incrementTotalAndRescale}/>
        {isLucky && <p className="Lucky">Lucky!</p>} 
        <Counter label="B2" onIncrement={incrementTotalAndRescale}/>
      </div>
    </div>
  )
}