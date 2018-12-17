import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Accordeon from './Accordeon'
import Sort from './Sort'

const INITIAL_STATE = {
  title: true,
  year: true,
  active: 'title'
}

class BooksList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = JSON.parse(localStorage.getItem('bookSort')) || INITIAL_STATE
  }

  componentDidMount() {
    this.refreshStateInLocalStorage()
  }

  componentDidUpdate() {
    this.refreshStateInLocalStorage()
  }

  refreshStateInLocalStorage = () => localStorage.setItem('bookSort', JSON.stringify(this.state))

  handleSortClick = (type) =>
    this.setState({
      [type]: !this.state[type],
      active: type
    })

  render() {
    const { books } = this.props

    return (
      <div className="container">
        <h1 className="page-title">Books list</h1>
        <Sort sort={this.state} onClick={this.handleSortClick} />
        <Accordeon books={books} sort={this.state} />
      </div>
    )
  }
}


const mapStateToProps = (store) => ({
  books: store
})

export default connect(mapStateToProps, null)(BooksList)
