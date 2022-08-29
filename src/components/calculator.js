import OutputScreen from './outputScreen';
import ButtonBox from './ButtonBox';
import Button from './Button'
import React from 'react';
import Wrapper from "./Wrapper";
import CalProvider from '../context/CalContext';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

function Calculator () {
  return (
    <CalProvider>
      <h1>My Calculator App</h1>
      <Wrapper>
        <OutputScreen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button 
            value ={btn}
            key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalProvider>
  )
}



export default Calculator;