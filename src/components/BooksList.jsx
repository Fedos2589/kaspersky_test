import React from 'react'
import { connect } from 'react-redux'
import Accordeon from './Accordeon'

const BooksList = ({ books }) =>
  <div className="container">
    <h1 className="page-title">Books list</h1>
    <Accordeon books={books} />
  </div>

const mapStateToProps = (store) => ({
  books: store
})

export default connect(mapStateToProps, null)(BooksList)
