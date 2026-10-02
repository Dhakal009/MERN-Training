import React from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
  }
  return (
    <>
    <Container w>
    <h2>Login</h2>
    
    <Form onSubmit={(e)=> handleSubmit(e)}>
      <Form.Group className= "my-2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" 
          onChange={(e) => setEmail(e.target.value)}
          />
      </Form.Group>
      <Form.Group className= "my-2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
          onChange={(e) => setPassword(e.target.value)}
          />
      </Form.Group>
      <Button type="submit" varient="dark" className="my-2" >
        Login
      </Button>
      

    </Form>
    </Container>
    </>
  )
}

export default Login