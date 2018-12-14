import React, { PureComponent } from 'react'
import Book from './Book'

class Accordeon extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      active: ''
    }
  }

  setActiveBook = (id) => this.setState({ active: id }) 

  render () {
    const { books } = this.props
    const { active } = this.state

    return (
      <ul className="accordeon">
        {
          books.map(book =>
            <Book
              key={book.ISBN}
              book={book}
              active={book.ISBN === active}
              onClick={this.setActiveBook}
            />
          )
        }
      </ul>
    )
  }
}

export default Accordeon
