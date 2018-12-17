import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BooksList from './BooksList'
import Form from './Form'

class Root extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={ () => <BooksList /> } />
          <Route exact path='/form' render={ (props) => <Form {...props} /> } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Root
