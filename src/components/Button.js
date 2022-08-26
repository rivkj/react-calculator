import React from 'react';

const getSignName = btn => {
  const className = {
    '=': 'equals',
    'x': 'sign',
    '-': 'sign',
    '+': 'sign',
    '/': 'sign',
  }
  return className[btn];
}

//button component as a functional component
const Button = ({value}) => {
  return (
    <button className={`${getSignName(value)} button`}>{value}</button>
  );
}

//export button component
export default Button;