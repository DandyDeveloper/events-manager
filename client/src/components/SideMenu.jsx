import React from 'react';
import { Link, IndexLink } from 'react-router';

var logo = require('../../public/img/logo.png')

export default class SideMenu extends React.Component { 
    constructor() { 
        super(); 
        this.state = { 

        }
    }
    render() { 
        var sideMenuStyle =  {
            left: '0px', 
            top: '0px', 
            width: '5em', 
            height: '100%', 
            marginTop: '0px'
        };
        var logoStyle = { 
            width: '35px',
            marginRight: '1em',
            marginBottom: '1em'
        };
        return (
            <div className="ui vertical sticky menu fixed top" style={sideMenuStyle}>
                <div className="item">
                    <Link to="/" className="ui logo icon image" style={logoStyle}><img alt="logo" src={logo}/></Link>
                <Link to="/profile"  activeClassName="active orange" className="item">
                    <b>P</b>
                </Link>
                <Link to="/events" activeClassName="active orange" className="item">
                    <b>E</b>
                </Link>
                <Link to="/upcoming_events" activeClassName="active orange" className="item">
                    <b>UE</b>
                </Link>
                </div>
            </div>
        );
    }
}
