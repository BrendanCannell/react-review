import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect, withRouter } from "react-router-dom"
import ComponentOrder from "./pages/ComponentOrder"
import ComponentType from "./pages/ComponentType"
import ComponentDepth from "./pages/ComponentDepth"
import ComponentPosition from "./pages/ComponentPosition"
import HookRules from "./pages/HookRules"
import SetStateCallback from "./pages/SetStateCallback"
import Memoization from "./pages/Memoization"
import './App.css'

export default function App() {
  return (
    <Router>
      <ClearOnNavigate />
      <nav>
        <ul>
          <li><NavLink to="/ComponentOrder">Order</NavLink></li>
          <li><NavLink to="/ComponentType">Type</NavLink></li>
          <li><NavLink to="/ComponentDepth">Depth</NavLink></li>
          <li><NavLink to="/ComponentPosition">Position</NavLink></li>
          <li><NavLink to="/HookRules">Hook Rules</NavLink></li>
          <li><NavLink to="/SetStateCallback">setState Callback</NavLink></li>
          <li><NavLink to="/Memoization">Memoization</NavLink></li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path="/"><Redirect to="/ComponentOrder" /></Route>
          <Route path="/ComponentOrder"><ComponentOrder /></Route>
          <Route path="/ComponentType"><ComponentType /></Route>
          <Route path="/ComponentDepth"><ComponentDepth /></Route>
          <Route path="/ComponentPosition"><ComponentPosition /></Route>
          <Route path="/HookRules"><HookRules /></Route>
          <Route path="/SetStateCallback"><SetStateCallback /></Route>
          <Route path="/Memoization"><Memoization /></Route>
        </Switch>
      </main>
    </Router>
  )
}

let ClearOnNavigate = withRouter(({history}) => {
  useEffect(() => history.listen(() => console.clear()), [])
  return null
})