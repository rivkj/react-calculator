import React from 'react';
import { Route, Routes } from "react-router-dom";
import Calculator from './components/calculator';
import Home from "./components/Home";
import Signin from './components/Signin';
import Signup from './components/Signup';
import { AuthContextProvider } from './Context/AuthContext';
// import "./css/Styles.css";
// import { Container } from "react-bootstrap";
// import { AuthContextProvider } from './Context/AuthContext';


function App() {
  return(
    <div>
      <AuthContextProvider>
        <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}
export default App;
