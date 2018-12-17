import { ADD, DELETE, EDIT } from '../actions'
import { books } from '../books'

const booksList = (books = books, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD: {
      const { newBook } = payload
      return [...books, newBook ]
    }
    case DELETE: {
      const { newBook } = payload
      return [...books, newBook ]
    }
    case EDIT: {
      const { newBook } = payload
      return [...books, newBook ]
    }
  }

  return books
}

export default booksList
