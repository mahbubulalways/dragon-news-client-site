import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const LogIn = () => {
        const {SignIn,user}=useContext(AuthContext)
        const navigate=useNavigate()
        const location=useLocation()
        console.log(location);
        const  from = location.state?.from?.pathname || "/";
        
        const handleSignIn=(event)=>{
          event.preventDefault()
          const form =event.target
          const email =form.email.value
          const password =form.password.value
          event.target.reset()
          SignIn(email,password)
          .then(result=>{
            navigate('/')
            navigate(from, { replace: true });
            console.log(result.user);
           })
           .catch(error=>{
            console.log(error.message);
           })
          
            
        }
    return (
        <Container className='mx-auto w-50'>
             <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <input type="submit" name=''   className='btn btn-primary mb-2'/>
      <p>Dont have an account please <Link className='text-danger' to='/register'>Register</Link></p>
    </Form>
        </Container>
    );
};

export default LogIn;