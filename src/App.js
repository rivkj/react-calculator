import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Calculator from "./components/calculator";
//import Home from "./components/Home";
import Signin from './components/Signin';
import Signup from './components/Signup';
import "./css/Styles.css";


const App = () => {
  return(
    <div className="app">
      <BrowserRouter>
        <h1>KJ's Projects</h1>
        < Nav />
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/calculator" element={<Calculator />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;