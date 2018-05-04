import React, { Component } from 'react';
import './App.css';

import Photo from './photo';


  const headerStyle = {
    fontSize: '1.2em'

  };

  const textStyle = {
    fontSize: '.8em',
    fontFamily: '"Hind Vadodara", sans-serif'
  }


class Text extends Component {
  
  constructor(props){
    super(props);

    this.state = { show: false };

    this.onPageScroll = this.onPageScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.onPageScroll);
  }

  onPageScroll(){
    if(window.pageYOffset > 400){
      this.setState({ show: true });
    }
  }

 
  render(){

    return (
      <div className={this.state.show ? "Body-details-scroll" : "Body-details"}>

        <div className="Body-first-header">
          <i className="far fa-id-card fa-3x"></i>
          <h3 style={headerStyle}>Who Am I?</h3>
          <p style={textStyle}>I am a self driven individual, constantly on the search to improve all skillsets. I am a father, husband, and dedicated employee. I have developed a background in leadership, management, as well as the customer experience. These skills that I have developed over time help me to create web pages with a mindset towards the User Experience.</p>
        </div>
        <div className="Body-photo">
          <Photo />
        </div>
        <div className="Body-second-header">
          <i className="fab fa-react fa-3x"></i>
          <h3 style={headerStyle}>Developer Skills</h3>
          <p style={textStyle}>I have experience in frameworks such as React, Angular, Ionic, Bootstrap, and Nativescript. I develop web pages and single page applications in a NodeJS environment, and have experience working with MongoDB and Express.</p>
        </div>
      </div>
    );
  }
}

export default Text;
