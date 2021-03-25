import React, { Component } from "react";
import DetailsComponent from "./details-component/details-component";
import ThumbnailComponent from "./thumbnail-component/thumbnail-component";

class MovieContainer extends Component {
  render() {
    return (
      <div>
        <DetailsComponent/>
        <ThumbnailComponent/>
      </div>
    )
  }
}

export default MovieContainer;
