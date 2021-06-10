import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, FormControl} from 'react-bootstrap';
import { seachMovie } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    findMovie: (title) => dispatch(seachMovie(title))
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

      this.props.findMovie(title);


      // this.setState ({
      //   results: this.props.movieList.filter ( (movie) =>
      //     (this.removeSpaces(movie.title)).includes(title)
      //   )
      // });
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

export default connect(null, mapDispatchToProps)(SearchContainer);