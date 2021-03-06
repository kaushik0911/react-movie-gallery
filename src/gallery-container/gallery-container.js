import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import MovieContainer from '../movie-container/movie-container';

const mapToStateProps = state => {
  return { movieList: state.refreshMovieListReducer.movieList }
}

class GalleryConainter extends Component {
  constructor (props) {
    super (props);
  }

  render() {
    return (
      <div>
        <Container>
          <Row xs={2} md={3} lg={4}>
            {this.props.movieList.map((movie, i) =>
              <Col key={i} className="nopadding">
                <MovieContainer title={movie.title} synopsis={movie.synopsis} imageUrl={movie.poster}/>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect(mapToStateProps)(GalleryConainter);
