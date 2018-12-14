import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import BooksList from './BooksList'

class Root extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={ () => <BooksList /> } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Root
