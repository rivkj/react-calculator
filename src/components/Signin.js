import React from "react";
import { GoogleButton } from 'react-google-button';
import { Link } from "react-router-dom";

const Signin = () => {
  return(
    <div>
      <div>
      <div>
        <h1>Sign in to your account</h1>
        <p>Don't have an account?<Link to="/signup">Sign up.</Link></p>
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
        <button>Sign In</button>
      </form>
    </div>
      <div className="g-button">
        <GoogleButton />
      </div>
    </div>
  );
};

export default Signin;