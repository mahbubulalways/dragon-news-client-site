import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div>
             <Container className='mx-auto w-50'>
             <Form>
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
        <Form.Check type="checkbox" label="Accept terms and conditions " />
      </Form.Group>
      <Button className='btn btn-primary'>submit</Button>
      <p>Already have an account please <Link className='text-danger' to='/log-in'>Register</Link></p>
    </Form>
        </Container>
        </div>
    );
};

export default Register;