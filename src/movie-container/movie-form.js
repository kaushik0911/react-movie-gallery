import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../redux/actions/index';

const mapDispatchProps = dispatch => {
  return {
    addMovie: imagelist => dispatch(addMovie(imagelist))
  }
}

class ImageForm extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      imageURL: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTextChange(event){
    this.setState({imageURL: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    const { imageURL } = this.state;
    this.props.addImage({ imageURL }); // ??
    this.setState({ imageURL: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>image URL</label>
        <br/>
        <input type="text" onChange={this.onTextChange}></input>
        <br/>
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default connect(null, mapDispatchProps)(ImageForm);