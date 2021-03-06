import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import classNames from 'classnames'

const Book = (
  {
    book: { title, authors, pages, publisher, publicationDate, releaseDate, ISBN, NOimg },
    active,
    onClick,
    dispatch
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
    <h3 className="book-title">
      <div
        className="book-title-text"
        onClick={() => onClick(ISBN)}
      >
        {title}
      </div>
      <div className="book-controls">
        <Link to="/" onClick={() => dispatch({ type: 'DELETE', payload: ISBN })}>
          <Icon type="delete" />
        </Link>
        <Link to={{ pathname: '/form', state: { ISBN: ISBN } }}>
          <Icon type="edit" />
        </Link>
      </div>
    </h3>
    <div className="book-description">
      {
        NOimg
          ? <img className="book-image" src={'https://yt3.ggpht.com/a-/AN66SAwf23sWPRSeqTbpSYiAMt8dVUh9mivMyP-8Mg=s900-mo-c-c0xffffffff-rj-k-no'} />
          : <img className="book-image" src={require(`../img/${ISBN}.jpg`)} />
      }
      <div className="book-description-text">
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
      </div>
    </div>
  </li>

export default connect(null, null)(Book)
