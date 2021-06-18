import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { userRegisteration } from '../apis/api-handlers/users-apis-handler';

class RegistrationContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      email: '',
      password: '',
      fullname: '',
    };

    this.onInputTypesChange = this.onInputTypesChange.bind(this);
  }

  onInputTypesChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onFormSubmit = async(event) => {
    event.preventDefault();

    var user = new Object();
    user.fullname = this.state.name;
    user.email    = this.state.email;
    user.password = this.state.password;

    try {
      let response = await userRegisteration(user);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group controlId="formBasicFullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Your name" onChange={this.onInputTypesChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.onInputTypesChange} isInvalid={true}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">check</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" onChange={this.onInputTypesChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default RegistrationContainer;