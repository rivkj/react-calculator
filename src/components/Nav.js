import React from "react";
import { Link } from "react-router-dom";
import "../css/Styles.css";


export default function Nav() {
  return(
    <div className="navbar">
      <div className="logo"></div>
        <ul className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/calculator">Calculator</Link>
        </ul>
    </div>
  )
}