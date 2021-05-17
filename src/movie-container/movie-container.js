import React, { Component } from "react";
import {Badge, Card} from 'react-bootstrap';

class MovieContainer extends Component {
  render() {
    return (
      <div style={{padding: '10px 5px'}}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Movie Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Movie Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Badge variant="primary">Action</Badge>{' '}
            <Badge variant="secondary">Drama</Badge>{' '}
          </Card.Body>
          <Card.Footer>
            <Card.Link href="#">More</Card.Link>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

export default MovieContainer;
