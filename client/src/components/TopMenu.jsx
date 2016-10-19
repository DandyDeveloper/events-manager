import React from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import auth from '../../services/Auth'; 

export default class TopMenu extends React.Component { 
    constructor(props, context) { 
        super(props, context); 
        this.state = { }; 
        this.router = context.router;
        this.state.loggedIn = auth.loggedIn();
        this.state.open = false;
        this._handleClick = this._handleClick.bind(this);
        this._menuClick = this._menuClick.bind(this);
        this.updateAuth = this.updateAuth.bind(this);
    }
    updateAuth(loggedIn) {
        this.setState({loggedIn: loggedIn});
        if(loggedIn){
            browserHistory.push('/');
        }
    }
    componentWillMount() {
        auth.onChange = this.updateAuth;
    }
    render() { 
        var topMenuStyle = { 
            marginTop: '1em',
            float: 'right'
        }
        return ( 
            <div className="ui pointing menu">
                <IndexLink to="/" activeClassName="active orange" className="item">Home</IndexLink>
                <Link to="/profile" activeClassName="active orange" className="item">Profile</Link>
                <Link to="/events" activeClassName="active orange" className="item">My Events</Link>
                <Link to="/upcoming_events" activeClassName="active orange" className="item">Upcoming Events</Link>
                <div className="right menu">
                    <div className="item">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search..." />
                        <i className="search link icon"></i>
                    </div>
                    </div>
                    {!this.state.loggedIn ? (
                        <Link to="/signin" activeClassName="active orange" className="item" onClick={this._menuClick}>
                           Sign In
                        </Link>
                    ):(
                        <Link to="/signout" activeClassName="active orange" className="item" onClick={this._menuClick}>
                            Sign Out
                        </Link>
                    )}
                </div>
            </div>
        ); 
    }
    _handleClick(e) {
    e.preventDefault();

    this.setState({open: !this.state.open});
    }

    _menuClick(e) {
    this.setState({open: false});
    }
}