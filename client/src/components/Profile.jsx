import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class ProfilePage extends Component  {
    constructor() {
        super();  
        this.state = { 
            user: "", 
            email: "", 
            group: ""    
        } 
    }

    componentWillMount() { 

    }

    render() { 
        return (
            <div>
                <div className="page-header text-center">
                    <FontAwesome name="snapchat" /><h1>Profile Page</h1>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="well">
                            <h2>This is a users profile page with their relevant information</h2>
                            <p><strong>id: </strong>{this.user}</p>
                            <input type="text" placeholder="Email..." />
                            <p><strong>password</strong>: NO PASSWORD BAD.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}