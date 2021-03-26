import React, { Component } from "react";
import QualityComponent from "./quality-sub-component/quality-component";

class ThumbnailContainer extends Component {
  render() {
    return (
      <div>
        <QualityComponent/>
      </div>
    )
  }
}

export default ThumbnailContainer;
