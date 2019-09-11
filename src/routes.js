import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import DevProfile from './pages/DevProfile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/profile" component={DevProfile} />
      </Switch>
    </BrowserRouter>
  );
}
