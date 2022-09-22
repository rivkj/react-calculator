import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./components/calculator";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./css/Styles.css";

const App = () => {
  return(
    <div className="app">
      <BrowserRouter>
        <h1>KJ's Projects</h1>
        < Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;