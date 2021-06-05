import React from 'react'
import {  Navbar, Nav} from "react-bootstrap"
import { logOut } from "../../../pages/login/loginAction";
import { LinkContainer } from "react-router-bootstrap"
import '../defaultLayout.style.css'
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



// export const Header = () => {

  export const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const { adminProfile } = useSelector(state => state.profile);
  
    const handleOnLogout = () => {
      console.log("logging out");
  
      dispatch(logOut(adminProfile?._id));
      history.push("/");
    }


    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md" className="color-nav">

        <Navbar.Brand>
          TIME SHEET SYSTEM
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

              <LinkContainer to="/availability">
              <Nav.Link>SHIFTS REQUESTS</Nav.Link>
              </LinkContainer>
    
            <Nav.Link onClick={handleOnLogout} style={{ cursor: "pointer" }}>LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

     
    )
}
