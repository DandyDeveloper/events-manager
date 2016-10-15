import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class TopMenu extends React.Component { 
    constructor( ) { 
        super(); 
        this.state = { 

        }
    }
    render() { 
        var topMenuStyle = { 
            marginTop: '0',
            float: 'right'
        }
        return ( 
            <div className="ui secondary  menu" style={topMenuStyle}>
                <IndexLink to="/" activeClassName="active orange" className="item">Home</IndexLink>
                <Link  to="/profile" activeClassName="active orange" className="item">Profile</Link>
                <Link  to="/events" activeClassName="active orange" className="item">Events</Link>
                <div className="right menu">
                    <div className="item">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search..." />
                        <i className="search link icon"></i>
                    </div>
                    </div>
                    <a className="ui item">Logout</a>
                </div>
            </div>
        ); 
    }
}