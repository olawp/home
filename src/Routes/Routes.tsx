import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Components/Home';
import MainLayout from '../Layouts/MainLayout';
import { FC } from 'react';
import Queue from '../Components/Queue';
import Stack from '../Components/Stack';
import LinkedList from '../Components/LinkedList';
import BinarySearchTree from '../Components/BinarySearchTree';

const Routes: FC = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/queue">
          <Queue />
        </Route>
        <Route exact path="/stack">
          <Stack />
        </Route>
        <Route exact path="/linkedlist">
          <LinkedList />
        </Route>
        <Route exact path="/binarysearchtree">
          <BinarySearchTree />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
