import React from 'react';

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
            float: 'left'
        };
        var logoStyle = { 
            width: '35px',
            marginRight: '1em',
            marginBottom: '1em'
        };
        return (
            <div className="toc">
                <div className="ui vertical inverted sticky menu" style={sideMenuStyle}>
                    <div className="item">
                        <a className="ui logo icon image" style={logoStyle} href="/"><img alt="logo" src={logo}/></a>
                        <a href="/"><b>Event Management</b></a>
                    <a className="item" href="/introduction/getting-started.html">
                        <b>Getting Started</b>
                    </a>
                    <a className="item" href="/introduction/new.html">
                        <b>New in 2.2</b>
                    </a>
                    <div className="item">
                        <div className="header">Introduction</div>
                        <div className="menu">
                            <a className="item" href="/introduction/integrations.html">
                            Integrations
                            </a>
                            <a className="item" href="/introduction/build-tools.html">
                            Build Tools
                            </a>
                            <a className="item" href="/introduction/advanced-usage.html">
                            Recipes
                            </a>
                            <a className="item" href="/introduction/glossary.html">
                            Glossary
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
