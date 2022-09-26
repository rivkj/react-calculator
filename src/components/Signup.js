import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div>
        <h1>Sign up for a free account</h1>
        <p>Already have an account?<Link to="/">Sign in.</Link></p>
      </div>
      <form>
        <div>
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup