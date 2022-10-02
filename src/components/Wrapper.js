import React from 'react';
import '../css/Wrapper.css';
import './calculator';

const Wrapper = ({ children }) => {
  return (
  <div className='wrapper'>{children}</div>
  )
};

export default Wrapper;