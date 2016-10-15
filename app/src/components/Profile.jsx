import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class ProfilePage extends Component  {
    constructor() {
        super();  
        this.user = "Aaron"; 
    }

    render() { 
        return (
            <div class="container">
                <div class="page-header text-center">
                    <h1><span class="fa fa-anchor"></span> Profile Page</h1>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="well">
                            <h3><span class="fa fa-user"></span> Local</h3>
                                <p><strong>id</strong>: Username</p>
                                <p><strong>email</strong>: Email Address</p>
                                <p><strong>password</strong>: NO PASSWORD BAD.</p>
                        </div>
                   </div>
                </div>
            </div>  
        );
    }
}