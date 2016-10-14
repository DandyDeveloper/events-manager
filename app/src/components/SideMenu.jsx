import React,  { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class SideMenu extends Component {
  render() {
    return (
        <div className="ui secondary vertical pointing menu">
            <IndexLink to="/" className="item" activeClassName="active orange"><i className="calendar icon"></i> Home</IndexLink>
            <Link to="/events" className="item" activeClassName="active orange"><i className="list layout icon"></i> Events</Link>
            <Link to="/profile" className="item" activeClassName="active orange"><i className="book icon"></i> Profile</Link>
            <Link to="/logout" className="item" activeClassName="active orange"><i className="book icon"></i> Logout</Link>
        </div>
    );
  }
}