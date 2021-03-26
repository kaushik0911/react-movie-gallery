import React, { Component } from "react";
import DurationComponent from "./duration-sub-component/duration-component";
import TitleComponent from "./title-sub-component/title-component";
import GenreComponent from "./genre-sub-component/genre-component";

class DetailsContainer extends Component {
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

export default DetailsContainer;
