import React, { PureComponent } from 'react'
import Book from './Book'

class Accordeon extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      active: '',
      sort: {
        type: 'title',
        directionIncrease: true
      }
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

  sortBooks = (books, type, directionIncrease) =>
    type === 'title'
      ? this.sortByTitle(books, directionIncrease)
      : this.sortByDate(books, directionIncrease)

  render () {
    const { books } = this.props
    const { active, sort: { type, directionIncrease } } = this.state

    return (
      <ul className="accordeon">
        {
          this.sortBooks(books, type, directionIncrease).map(book =>
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
