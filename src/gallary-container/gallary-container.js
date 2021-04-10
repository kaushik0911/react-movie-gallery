import React, { Component } from "react";
import DetailsContainer from "./details-container/details-container";
import ThumbnailContainer from "./thumbnail-container/thumbnail-container";

class MovieContainer extends Component {
  render() {
    return (
      <div>
        <ThumbnailContainer/>
        <DetailsContainer/>
      </div>
    )
  }
}

export default MovieContainer;
