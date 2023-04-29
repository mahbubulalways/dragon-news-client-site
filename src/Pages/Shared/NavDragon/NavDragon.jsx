
import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavDragon = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleSignOut=()=>{
      logOut()
      .then(result=>{
        console.log(result.user);
       })
       .catch(error=>{
        console.log(error.message);
       })
    }
    return (
        <div>
            <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
            { user && <Nav.Link href="#deets"><h1><FaUserCircle></FaUserCircle></h1></Nav.Link>}
           
           {user ?  <Button onClick={handleSignOut} variant="dark">Log out</Button> : <span>
           <Link to='/log-in'> <Button variant="dark">Log in</Button></Link> <Link to='/register'> <Button variant="dark">Register</Button></Link>
            </span>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </Container>
        </div>
    );
};

export default NavDragon;