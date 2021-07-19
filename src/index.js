import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import Parks from './Parks'

const App = () => (
  <div className="App">
    <img className="App-Logo" src={logo} alt="React Logo" />
    <h1 className="App-Title">Hello Parcel and Poca !</h1>
    <Parks />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

    <script src="index.js"></script>

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}