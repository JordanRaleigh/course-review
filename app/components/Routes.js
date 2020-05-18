import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import MovieList from './MovieList'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/movies'>Movies</NavLink>
            </li>
            <li>
              <NavLink to='/blah-blah'>Not a Route</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path='/movies/:id'>
              <div>Hello!!!</div>
            </Route>
            <Route path='/movies' component={MovieList} />
            <Route exact path='/'>
              <div>
                <h1>This is the Main Page!</h1>
                <p>
                  This seems like a nice place to get started with some Routes!
                </p>
              </div>
            </Route>
            <Route>
              <div>This page does not have content. 404 Sorry!</div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default Routes
