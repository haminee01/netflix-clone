import React from "react";
import {
  Container,
  Button,
  Form,
  Nav,
  Navbar,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" className="navbar-black" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to="/">
            <img width={100} src="https://noona-netflix.netlify.app/logo.png" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/Movies" className="nav-item">
              Movies
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
