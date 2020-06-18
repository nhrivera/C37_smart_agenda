import React, {useState, useEffect} from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Menu() {

  return (
    <div>
    <Navbar expand="lg" bg="dark" variant="dark" className="navbar-custom">
      <Navbar.Brand href="#home">S M A R T A G E N D A</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">clients</Nav.Link>
        <Nav.Link href="#pricing">your profile</Nav.Link>
        <Nav.Link href="#pricing">settings</Nav.Link>
        <Nav.Link href="#pricing">help and feedback</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">sign out</Nav.Link>
      </Nav>

      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}