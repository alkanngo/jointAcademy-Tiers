import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import UserList from './routes/UserList'
import UserDetails from './routes/UserDetails'

function App() {
  return (
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
  );
}

export default App;
