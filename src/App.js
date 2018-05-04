import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { hover: false };

    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleHover(){
    this.setState({ hover: true });
  }

  handleLeave(){
    this.setState({ hover: false });
  }


  render() {
    return (
      <div className="App">
        <div className="App-background"></div>
        <div className="App-container">
          <header className="App-header">
            <h1 className="App-title">John Musselman</h1>
            <i className="App-code fas fa-code fa-3x"></i>
            <h3 className="App-job">Front End Web Developer</h3>
            <p className="App-description">I design and build beautiful websites. I work with React, Angular, NodeJS, Express and MongoDB. I am proficient in HTML, CSS, and Javascript.</p>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
