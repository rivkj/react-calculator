import React from 'react';

//button component as a functional component
const Button = (props) => {
  return (
    <input type="button" 
      value={props.label} 
    />
  );
}

//export button component
export default Button;