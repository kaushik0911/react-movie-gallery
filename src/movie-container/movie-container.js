import React, { Component } from "react";
import {Badge, Card} from 'react-bootstrap';

class MovieContainer extends Component {
  render() {
    return (
      <div style={{padding: '10px 5px 0px'}}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">{this.props.title}</Card.Subtitle> */}
            <Card.Text>{this.props.synopsis}</Card.Text>
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
