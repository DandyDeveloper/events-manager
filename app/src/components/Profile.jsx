import React, { Component } from 'react';

export default class ProfilePage extends Component  {
    constructor() {
        super();  
        this.user = "Aaron"; 
    }

    render() { 
        return (
            <div>
                <div className="page-header text-center">
                    <h1><span className="fa fa-anchor"></span>Profile Page</h1>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="well">
                            <h3><span className="fa fa-user"></span> Local</h3>
                                <p><strong>id</strong>: Username</p>
                                <input type="text" placeholder="Email..." />
                                <p><strong>password</strong>: NO PASSWORD BAD.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}