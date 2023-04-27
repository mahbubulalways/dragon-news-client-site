import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/RightNav/RightNav';
import { Outlet } from 'react-router-dom'
import NavDragon from '../Pages/Shared/NavDragon/NavDragon';
const NewsLayout = () => {
    return (
        <div className='w-[80%] mx-auto'>
        <Header></Header>
        <NavDragon></NavDragon>
<Container>
  <Row>
  
    <Col lg={9}>
       <Outlet></Outlet>
    </Col>
    <Col lg={3}>
       <RightNav></RightNav>
    </Col>
  </Row>
</Container>
    </div>
    );
};

export default NewsLayout;