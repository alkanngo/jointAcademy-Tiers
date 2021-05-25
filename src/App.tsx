/**
 * The candidate may change this file contents
 */
 import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import UserList from './routes/UserList/UserList'
import UserDetails from './routes/UserDetails/UserDetails'
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/user/:id">
            <UserDetails />
          </Route>

          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
