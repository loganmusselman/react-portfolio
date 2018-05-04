import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Text from './body';
import Timeline from './timeline';
import Contact from './contact';
import Footer from './footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Text />, document.getElementById('body'));
ReactDOM.render(<Timeline />, document.getElementById('timeline'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
