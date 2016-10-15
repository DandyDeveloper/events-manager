import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../index.js'; 
import ProfilePage from './Profile'; 

export default ( 
      <Route path="/" Component={App}>
        <IndexRoute Component={App} />
        <Route path="Profile" Component={ProfilePage} />
      </Route>
)
