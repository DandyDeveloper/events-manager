import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App.js'; 
import Home from './Home.jsx'
import ProfilePage from './Profile'; 

export default ( 
      <Route path="/" Component={App}>
        <IndexRoute component={Home} />
        <Route path="/profile" Component={ProfilePage}>
          <IndexRoute component={Home} />
        </Route>
      </Route>
)
