import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Root from './components/Root'
import './index.less'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Root />
      </Provider>
    )
  }
}

export default App
