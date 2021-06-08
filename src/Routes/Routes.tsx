import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Components/Home';
import MainLayout from '../Layouts/MainLayout';
import { FC } from 'react';

const Routes: FC = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
