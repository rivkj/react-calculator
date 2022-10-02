import React from "react";
import {useState} from "react";

import * as Math from "mathjs";

import Button from "./Button";
import OutputScreen from "./outputScreen";
import Wrapper from "./Wrapper";
import Nav from "./Nav";

const Calculator = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText =(val) => {
    setText((text) => [...text, val])
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const calculateResult = () => {
    const input = text.join("");

    setResult(Math.evaluate(input));
  };

  const buttonColor = "#6dd280";
  const buttonColor2 = "#207e31";

  return (
    <div className="Calc">
      <h1>My Calculator App</h1>
      <Nav />
      <Wrapper>
        <OutputScreen text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol=" . " handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="- " color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="Clear" color={buttonColor2} handleClick={resetInput} />
      </Wrapper>
    </div>
  )
}

export default Calculator;