import React, { Component } from "react";
import QualityComponent from "./quality-sub-component/quality-component";

class ThumbnailContainer extends Component {
  render() {
    return (
      <div className="thumbnail" style={{backgroundImage: "url('https://picsum.photos/200')"}}>
        <QualityComponent quality="HD"/>
      </div>
    )
  }
}

export default ThumbnailContainer;
