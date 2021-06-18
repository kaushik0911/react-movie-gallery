import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { login } from './session-apis';

class SessionContainer extends Component {
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
  }

  onInputTypesChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onFormSubmit = async(event) => {
    event.preventDefault();

    let email    = this.state.email;
    let password = this.state.password;

    login(email, password)
    .then(function (success) {
      if(success) {
        
      }
    })
    .catch(function (error) {
      return true;
    });;
  }
  
  handleClose = () => {
    this.setState({show: false});
  };

  render () {
    return (
      <div>
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
                <Form.Control name="password" type="password" placeholder="Password" onChange={this.onInputTypesChange}/>
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

export default SessionContainer;