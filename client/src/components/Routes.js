import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App.js'; 
import Home from './Home.jsx';
import Signin from './Signin';
import SignOut from './SignOut'; 
import ProfilePage from './Profile'; 

const NotFound = () => <h1>404.. This page is not found!</h1>

export default ( 
      <Route path="/" component={Home}>
        <Route path="signin" component={Signin} />
        <Route path="signout" component={SignOut} />
        <Route path="/profile" component={ProfilePage} />
        <Route path='*' component={NotFound} />
      </Route>
)
