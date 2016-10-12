import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 
    this.state = { 

    }; 
  }

  render() {
    return (
      <div className="App">
        <TopMenu state={this.state} />

        <div className="ui main container">
            <div className="ui grid">
                <div className="row">
                    <div className="four wide column">

                    </div>
                    <div className="twelve wide column">
                        <Breadcrumbs
                            routes={this.props.routes}
                            params={this.props.params}
                            separator={sep}
                            wrapperElement="div"
                            wrapperClass="ui large breadcrumb"
                            itemElement="div"
                            itemClass="section"
                            activeItemClass="active"
                        />
                    </div>
                </div>
                <div className="four wide column">
                    <SideMenu />
                </div>
                <div className="twelve wide column">
                    {this.props.children}
                </div>
            </div>
        </div>

        <div className="ui inverted vertical footer segment" id="footer">
          <div className="ui center aligned container">
            <div className="ui stackable inverted divided grid">
              <div className="three wide column">
                <h4 className="ui inverted header">Group 1</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">Link One</a>
                  <a href="#" className="item">Link Two</a>
                  <a href="#" className="item">Link Three</a>
                  <a href="#" className="item">Link Four</a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Group 2</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">Link One</a>
                  <a href="#" className="item">Link Two</a>
                  <a href="#" className="item">Link Three</a>
                  <a href="#" className="item">Link Four</a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Group 3</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">Link One</a>
                  <a href="#" className="item">Link Two</a>
                  <a href="#" className="item">Link Three</a>
                  <a href="#" className="item">Link Four</a>
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">Footer Header</h4>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
              </div>
            </div>
            <div className="ui inverted section divider"></div>
            <img src={logo} className="ui centered mini image" alt="Logo" />
            <div className="ui horizontal inverted small divided link list">
            </div>
          </div>
        </div>

        <Alert stack={{limit: 3}} position="top-right" timeout={5000} offset={50} />
        </div>
    );
  }
}

export default App;