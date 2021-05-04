import React from 'react'
import {  Navbar, Nav} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import '../defaultLayout.style.css'



export const Header = () => {
    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md" className="color-nav">

        <Navbar.Brand>
          Time Sheet System
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

          <LinkContainer to="/dashboard">
              <Nav.Link>DASHBOARD</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/shifts">
              <Nav.Link>SHIFTS</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/employee">
              <Nav.Link>EMPLOYEE</Nav.Link>
              </LinkContainer>
    
            <Nav.Link >LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

     
    )
}
