import React, { Component } from 'react';
import {Form, FormControl, Navbar, Nav} from 'react-bootstrap';
import SessionContainer from '../session-container/login-container';

class MenuContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      loginPopup: false
    };
  }

  loginShow = () => {
    this.setState({loginPopup: true});
  };

  render () {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Movie Gallery</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-center" inline>
            <FormControl type="text" placeholder="Search Movie Title" className="mr-sm-2" />
          </Form>
          <Nav className="ml-auto">
            <Nav.Link onClick={this.loginShow}>Login</Nav.Link>
            <Nav.Link href="#signup">Signup</Nav.Link>
          </Nav>
        </Navbar>
        <SessionContainer show={this.state.loginPopup}/>
      </div>
    )
  }
}

export default MenuContainer;