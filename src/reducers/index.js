import { ADD, DELETE, EDIT } from '../actions'
import { books } from '../books'

const booksList = (books = books, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD: {
      return [...books, { ...payload, NOimg: true } ]
    }
    case DELETE: {
      let filteredBooks = books.filter(item => item.ISBN !== payload)
      return [...filteredBooks]
    }
    case EDIT: {
      let filteredBooks = books.filter(item => item.ISBN !== payload.ISBN)
      return [...filteredBooks, payload ]
    }
  }

  return books
}

export default booksList
