import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, FormControl} from 'react-bootstrap';
import { fetchSearchResults } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    findMovie: (title) => dispatch(fetchSearchResults(title))
  }
}

class SearchContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      results: [],
    }

    this.enterMovieTitle = this.enterMovieTitle.bind(this);
  }

  enterMovieTitle = (e) => {
    var title = this.removeSpaces(e.target.value);
    this.props.findMovie(title);
  }

  render () {
    return (
      <Form className="d-flex justify-content-center" inline>
        <FormControl onChange={this.enterMovieTitle} type="text" placeholder="Search Movie Title" className="mr-sm-2" />
      </Form>
    )
  }

  removeSpaces = (string) => {
    return string.replace(/\s/g, '').toLowerCase();
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);