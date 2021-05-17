import React, { Component } from 'react';
import {Form, FormControl, Navbar, Nav} from 'react-bootstrap';

class MenuContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
    };
  }

  render () {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Movie Gallery</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Trending</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-center" inline>
            <FormControl type="text" placeholder="Search Movie Title" className="mr-sm-2" />
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#features">Signup</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default MenuContainer;