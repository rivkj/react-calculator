
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
// import { UseAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {UserAuth} from "../Context/AuthContext";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { createUser } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/home')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" required />
            </Form.Group>
            <Button type="submit" className="w-100 /mt-4" style={{ marginTop: "1.5rem"}}>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center ">
        Already have an account? <Link to="/">Log In.</Link>
      </div>
    </>
  );
};
