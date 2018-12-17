import React, { PureComponent } from 'react'
import Book from './Book'

class Accordeon extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      active: ''
    }
  }

  componentDidMount() {
    if (this.props.books) this.setState({ active: this.props.books[0].ISBN })
  }

  setActiveBook = (id) =>
    id === this.state.active
      ? this.setState({ active: '' })
      : this.setState({ active: id })

  sortByTitle = (books, directionIncrease) =>
    directionIncrease
      ? books.sort((a, b) => a.title.localeCompare(b.title))
      : books.sort((a, b) => b.title.localeCompare(a.title))

  sortByDate = (books, directionIncrease) =>
    directionIncrease
      ? books.sort((a, b) => a.publicationDate - b.publicationDate)
      : books.sort((a, b) => b.publicationDate - a.publicationDate)

  sortBooks = (books, type, title, year) =>
    type === 'title'
      ? this.sortByTitle(books, title)
      : this.sortByDate(books, year)

  render () {
    const { books, sort: { title, year, active: activeSortType } } = this.props
    const { active } = this.state

    return (
      <ul className="accordeon">
        {
          this.sortBooks(books, activeSortType, title, year).map(book =>
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
