import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let useStrictMode = false
let app =
  useStrictMode
    ? <React.StrictMode>
        <App />
      </React.StrictMode>
    : <App />

ReactDOM.render(
  app,
  document.getElementById('root')
);