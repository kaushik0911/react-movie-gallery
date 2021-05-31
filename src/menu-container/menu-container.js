import React, { Component } from 'react';
import { connect } from "react-redux";
import { Navbar, Nav } from 'react-bootstrap';
import SessionContainer from '../session-container/login-container';
import SearchContainer from '../search-container/search-container';
import { refreshMovieList } from '../redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    refreshMovieList: () => dispatch(refreshMovieList())
  }
}

class MenuContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      loginPopup: false
    };

    this.getTrending = this.getTrending.bind(this);
  }

  getTrending = () => {
    this.props.refreshMovieList();
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
            <Nav.Link href="#trending" onClick={this.getTrending}>Trending</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <SearchContainer/>
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

export default connect(null, mapDispatchToProps)(MenuContainer);