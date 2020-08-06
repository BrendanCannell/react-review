import React from 'react';
import "./Comparison.css";

export default function Comparison(props) {
  return (
    <div className="Comparison">
      {props.children.map((child, i) =>
        <div key={i}>{child}</div>
      )}
    </div>
  )
}