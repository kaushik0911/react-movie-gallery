import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import MovieContainer from '../movie-container/movie-container';

class GalleryConainter extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row xs={2} md={3} lg={4}>
            {[...Array(15)].map((x, i) =>
              <Col key={i} className="nopadding">
                <MovieContainer/>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    )
  }
}

export default GalleryConainter;
