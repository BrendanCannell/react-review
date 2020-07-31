import React, {useState} from 'react';
import './App.css';

console.log(React.createElement('div', ))

function Input(props) {
  let {type, value, saveValue} = props
  let label = "Input " + type
  console.log("render: " + label)
  let [isFocused, setIsFocused] = useState(false)
  let onFocus = () => {
    console.log(`onFocus: ${label}`)
    setIsFocused(true)
  }
  let onBlur = () => {
    console.log(`onBlur: ${label}`)
    setIsFocused(false)
  }
  let onChange = (event) => {
    console.log(`onChange: ${label} ${event.target.value}`)
    saveValue(event.target.value)
  }
  let className = isFocused ? 'focused' : ''
  return (
    <input {...{className, type, value, onFocus, onBlur, onChange}} />
  )
}

function SignupForm() {
  console.log("render: SignupForm")
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let invalidMessage =
      username.length < 8 ? "Invalid username"
    : password.length < 8 ? "Invalid password"
    : false
  return (
    <form>
      {
        invalidMessage
        && <p className="error">{invalidMessage}</p>
      }
      <Input type="text"     value={username} saveValue={setUsername} />
      <Input type="password" value={password} saveValue={setPassword} />
    </form>
  )
}

function App() {
  return <SignupForm />
}

export default App;
