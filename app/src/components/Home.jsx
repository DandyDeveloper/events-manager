import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import TopMenu from './TopMenu'; 
import SideMenu from './SideMenu'; 

import '../../semantic/dist/semantic.min.css';
import '../../semantic/dist/semantic.min.js';

export default class Home extends Component {
  constructor() {
    super(); 
    this.state = { 

    }; 
  }
	componentWillMount() {

  }
  render() {
    return (
    <div>
      <div className="ui"> 
        <TopMenu />
        <SideMenu />
      </div>
      <div className="ui grid">
        <div className="two wide column row" id="spacing" /> 
        <div className="ui divider content"> 
          {this.props.children}
        </div>
      </div>  
    </div>
    );
  }
}
