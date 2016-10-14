import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
//import logo from './logo.png';

export default class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  componentWillReceiveProps(newProps) {
    this.setState(newProps.state);
  }
  render() {
 
    return (
      <div className="ui menu fixed">
      <div className="ui container">
        <a href="/" className="header item">
          <img className="logo"  alt="Logo"/>
          Event Application
        </a>
        <IndexLink to="/" className="item" activeClassName="active">Home</IndexLink>
        <Link to="/" className="item" activeClassName="active">Profile</Link>
        <a href="#" className="item">Logout</a>
        </div>
      </div>
    );
  }
}
