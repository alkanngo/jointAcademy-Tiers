import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Users from './routes/Users'
import User from './routes/User'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:id">
          <User />
        </Route>

        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
