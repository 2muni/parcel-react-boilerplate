import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Intro from './Intro';
import Search from './Search';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Intro} />
    <Route exact path="/search" component={Search} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default AppRouter;
