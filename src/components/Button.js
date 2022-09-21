import React from 'react';
import "../css/Wrapper.css";

//button component as a functional component
const Button = ({ symbol, color, handleClick }) => {
  return (
    <div 
    onClick={() => handleClick(symbol)}
    className="button-wrapper" 
    style={{ backgroundColor: color }}>
      {symbol}
    </div>
  );
}

//export button component
export default Button;