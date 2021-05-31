import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, FormControl} from 'react-bootstrap';

const mapToStateProps = state => {
  return { movieList: state.refreshMovieListReducer.movieList }
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
      let title = this.state.search.toLowerCase();
      this.setState ({
        results: this.props.movieList.filter ( (movie) =>
          { movie.title.toLowerCase().includes(title) }
        )
      });
    }

    console.log(this.state.results)
  }

  render () {
    return (
      <Form className="d-flex justify-content-center" inline>
        <FormControl onChange={this.enterMovieTitle} type="text" placeholder="Search Movie Title" className="mr-sm-2" />
      </Form>
    )
  }
}

export default connect(mapToStateProps)(SearchContainer);