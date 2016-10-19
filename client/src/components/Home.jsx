import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import TopMenu from './TopMenu'; 
import SideMenu from './SideMenu'; 

import '../../semantic/dist/semantic.min.css';
import '../../semantic/dist/semantic.min.js';


export default class Home extends Component {

	componentWillMount() {

  }
  render() {
    return (
    <div>
      <TopMenu />
      <div className="ui segment container">
          {this.props.children}
      </div>  
    </div>
    );
  }
}
