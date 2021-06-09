import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, FormControl} from 'react-bootstrap';

const mapToStateProps = state => {
  return { movieList: state.refreshMovieListReducer.movieList }
}

const mapDispatchToProps = dispatch => {
  return {
    // refreshMovieList: () => dispatch(refreshMovieList())
  }
}

class SearchContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      search: '',
      results: [],
    }

    this.enterMovieTitle = this.enterMovieTitle.bind(this);
  }

  enterMovieTitle = (e) => {
    this.setState ({
      search: e.target.value
    });

    if (this.state.search.length > 0) {
      var title = this.removeSpaces(this.state.search);

      this.setState ({
        results: this.props.movieList.filter ( (movie) =>
          (this.removeSpaces(movie.title)).includes(title)
        )
      });
    }
  }

  render () {
    return (
      <Form className="d-flex justify-content-center" inline>
        <FormControl onKeyUp={this.enterMovieTitle} type="text" placeholder="Search Movie Title" className="mr-sm-2" />
      </Form>
    )
  }

  removeSpaces = (string) => {
    return string.replace(/\s/g, '').toLowerCase();
  }
}

export default connect(mapToStateProps)(SearchContainer);