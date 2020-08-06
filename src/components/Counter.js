import React, {useState, useEffect} from 'react'
import "./Counter.css"

function Counter(props) {
  // `label` identifies the counter on the screen/logs, and also determines color
  // `onIncrement` will be called each time the counter is clicked
  let {label, onIncrement} = props
  // Number of times clicked
  let [count, setCount] = useState(0)
  // When clicked, add one to the count and call `onIncrement` if present
  let onClick = () => {
    setCount(1 + count)
    if (onIncrement) onIncrement()
  }
  // Log mount/render/unmount
  useLifecycleLog(label)
  return (
    <div className="Counter"
      onClick={onClick}
      style={{backgroundColor: BACKGROUND_COLORS_BY_LABEL[label]}}
    >
      {label}: {count}
    </div>
  )
}

let BACKGROUND_COLORS_BY_LABEL = {
  A: 'coral',
  B: 'cyan',
  A1: 'teal',
  A2: 'orange',
  B1: 'red',
  B2: 'blue',
}

function useLifecycleLog(label) {
  useEffect(() => console.log(`${label}: Render`))
  useEffect(() => {
    console.log(`${label}: Mount`)
    return () => console.log(`${label}: Unmount`)
  }, [])
}

export default React.memo(Counter)