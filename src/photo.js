import React, { Component } from 'react';
import image from './image.jpg';

class Photo extends Component {

	

  render(){
    return(
      <div className="App-photo-container">
        <img className="App-photo" src={image} alt="logo" />
      </div>
    )
  }
}

export default Photo;
