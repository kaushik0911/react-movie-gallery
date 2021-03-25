import React, { Component } from "react";
import DurationComponent from "../duration-component/duration-component";
import TitleComponent from "../title-component/title-component";
import GenreComponent from "../genre-component/genre-component";

class DetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 0,
      title: 'title',
      genre: 'genre'
    };
  }

  render() {
    return (
      <div>
        <DurationComponent duration={this.state.duration}/>
        <TitleComponent title={this.state.title}/>
        <GenreComponent genre={this.state.genre}/>
      </div>
    )
  }
}

export default DetailsComponent;
