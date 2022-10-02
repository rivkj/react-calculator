import React, { useEffect, useState } from "react";

import { UserAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../css/Signin.css";
import { Form, Button, Card } from "react-bootstrap";
import { GoogleButton } from "react-google-button";


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signIn, googleSignIn, user } = UserAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try{
      await signIn(email, password)
      navigate('/home')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  const handleGoogleSignIn =  async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/home');
    }
  }, [user]);

  return(
    <div>
      <div>
        <div>
          <h1 className="h3 mb-3 font-weight-normal">Sign in to your account</h1>
          <p className="w-100 text-left">Don't have an account? <Link to="/Signup">Sign up</Link></p>
        </div>
        <Card>
        <Form onSubmit={handleSubmit} className="form-signin">
          <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Password" required />
            </Form.Group>
          <Button className="w-100 /mt-4" type="submit">Sign In</Button>
        </Form>
        </Card>
      </div>
      <div className="g-button">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;