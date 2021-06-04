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
import { AppProvider } from "./context/Context";

function App() {
  return (
    <>
    <AppProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/user/:id">
            <UserDetails />
          </Route>

          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
    </>
  );
}

export default App;
