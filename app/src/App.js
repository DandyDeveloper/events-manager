import React from 'react';
import logo from './logo.svg';

import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;

import './App.css';

export default class App extends React.Component {
  constructor() {
    super(); 
    this.state = { 

    }; 
  }
	componentWillMount() {
        require('../semantic/dist/semantic.min.css');
        require('../semantic/dist/semantic.min.js');
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}
