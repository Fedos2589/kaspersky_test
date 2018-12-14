import { createStore } from 'redux'
import reducer from '../reducers'
import { books } from '../books'

const store = createStore(reducer, books, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

export default store
