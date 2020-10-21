import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';
import logo from '../Photo/hospital.png';
import {Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

class NavBar extends Component {
    render() { 
        return ( 
            
                <Navbar style={{width: '300%',marginLeft: '0px'}} expand="lg" fixed='top' collapseOnSelect
        bg="#156130"
        variant="dark">
            <Link to="#">
          <Image
            widthmage
            src={logo}
            rou="40px"
            height="40px"
            className="mr-3"
          />
        </Link>
  <Navbar.Brand href="#home">Siddha Ayrvedic Base Hospital</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="More Options" id="basic-nav-dropdown">
        <NavDropdown.Item href="/viewdiet">View Added Diet Plans</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Form inline>
    </Form>
  </Navbar.Collapse>
</Navbar>
         );
    }
}
 
export default NavBar;