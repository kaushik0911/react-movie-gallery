import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import MovieContainer from '../movie-container/movie-container';
import { refreshMovieList } from '../redux/actions';

const mapToStateProps = state => {
  return { movieList: state.refreshMovieListReducer.movieList }
}

const mapDispatchToProps = dispatch => {
  return {
    makeRefresh: () => dispatch(refreshMovieList())
  }
}

class GalleryConainter extends Component {
  constructor (props) {
    super (props);
  }

  async componentDidMount() {
    this.props.makeRefresh();
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

export default connect(mapToStateProps, mapDispatchToProps)(GalleryConainter);
