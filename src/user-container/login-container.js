import { login } from './session-apis';

import React, { Component } from 'react';
import MovieContainer from "../movie-container/movie-container";

import {Button, Form, Modal} from 'react-bootstrap';


class LoginContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      email: '',
      password: '',
      logged: false,
      show: false
    };

    this.onInputTypesChange = this.onInputTypesChange.bind(this);
    this.handleClose        = this.handleClose.bind(this);
    this.handleShow         = this.handleShow.bind(this);
  }

  onInputTypesChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onFormSubmit = async(event) => {
    event.preventDefault();

    let email    = this.state.email;
    let password = this.state.password;

    let response = await login(email, password);
    alert(response);
    if (response) {
      alert('hiii');
      this.setState({logged: true});
    } else {
      alert('noo hiii');
      this.handleShow();
    }
  }
  
  handleClose = () => {
    this.setState({show: false});
  };
  
  handleShow = () => {
    this.setState({show: true});
  };

  render () {
    if (this.state.logged) {
      return <MovieContainer/>
    } else {
      return (
        <div>
          <Button variant="primary" onClick={this.handleShow}>
            Login
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onInputTypesChange}/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" name="password" type="password" placeholder="Password" onChange={this.onInputTypesChange}/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.onFormSubmit}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
  }
}

export default LoginContainer;