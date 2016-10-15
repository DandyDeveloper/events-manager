import React from 'react';

import TopMenu from './TopMenu'; 
import SideMenu from './SideMenu'; 

import '../App.css';
import '../../semantic/dist/semantic.min.css';
import '../../semantic/dist/semantic.min.js';

export default class Home extends React.Component {
  constructor() {
    super(); 
    this.state = { 

    }; 
  }
	componentWillMount() {

  }
  render() {
    return (
      <div className="ui">
        <SideMenu />
        <TopMenu />
      </div>  
    );
  }
}
