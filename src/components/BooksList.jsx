import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Accordeon from './Accordeon'
import Sort from './Sort'

class BooksList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      title: true,
      year: true,
      active: 'title'
    }
  }

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
