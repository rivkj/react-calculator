import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Calculator from './components/calculator';

const App = () => {
  return(
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;