import React from 'react';
import "./Wrapper.css";

//functional component
//holds input and output rows
const OutputScreen = ({text, result}) => {
  return (
    <div className="screen">
      <div className="result">
        <h2>{result}</h2>
      </div>
      <div className="text">
        <h3>{text}</h3>
      </div>
    </div>
  )
}

//export output screen
export default OutputScreen;