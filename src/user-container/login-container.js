// my login component

import React, { Component } from 'react';
import { login } from './session-apis';

import MovieContainer from "../movie-container/movie-container";


class LoginContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      email: '',
      password: '',
      logged: false
    };

    this.onInputTypesChange = this.onInputTypesChange.bind(this);
  }

  onInputTypesChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state.email);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    let email = this.state.email;
    let password = this.state.password;

    // not working here 
    console.log(login(email, password))
    if (login(email, password)) {
      this.setState({logged: true});
    }
    
  }

  render () {
    if (this.state.logged) {
      return <MovieContainer/>
    } else {
      return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <div>
              <label>Email</label>
              <input type="text" name="email" onChange={this.onInputTypesChange}></input>
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" onChange={this.onInputTypesChange}></input>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      )
    }
  }
}

export default LoginContainer;