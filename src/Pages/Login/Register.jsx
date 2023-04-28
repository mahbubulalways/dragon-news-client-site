import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Register = () => {
const {createUserPassword} = useContext(AuthContext)
  const handleCreateUser=(event)=>{
   event.preventDefault()
   const form =event.target
   const name =form.name.value
   const email =form.email.value
   const password =form.password.value
   event.target.reset()
   createUserPassword(email,password)
   .then(result=>{
    console.log(result.user);
   })
   .catch(error=>{
    console.log(error.message);
   })
  }
    return (
        <div>
             <Container className='mx-auto w-50'>
             <Form onSubmit={handleCreateUser}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter your name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Accept terms and conditions " required/>
      </Form.Group>
       <input type="submit" name=''   className='btn btn-primary mb-2'/>
       <p>Already have an account please <Link className='text-danger' to='/log-in'>Log in</Link></p>
    </Form>
        </Container>
        </div>
    );
};

export default Register;