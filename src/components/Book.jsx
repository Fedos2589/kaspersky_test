import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
//<Link to="/form">Form</Link>

const Book = (
  {
    book: { title, authors, pages, publisher, publicationDate, releaseDate, ISBN },
    active
  }
) =>
  <li
    className={
      classNames({
        "book": true,
        "active": active
      })
    }
  >
    <img className="book-image" src={require(`../img/${ISBN}.jpg`)} />
    <h3 className="book-title">{title}</h3>
    <div className="book-authors-title">Authors:</div>
    <ul className="book-authors">
      {authors.map(author =>
        <li key={`${author.name}${author.surname}`} className="book-author">{`${author.name} ${author.surname}`}</li>
      )}
    </ul>
    <div className="book-pages">{`Number of pages: ${pages}`}</div>
    <div className="book-publisher">{`Publisher: ${publisher}`}</div>
    <div className="book-publication">{`Publication: ${publicationDate}`}</div>
    <div className="book-release">{`Release: ${releaseDate}`}</div>
    <div className="book-ISBN">{`ISBN: ${ISBN}`}</div>
  </li>

export default Book
