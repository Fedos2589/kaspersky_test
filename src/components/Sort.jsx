import React from 'react'
import classNames from 'classnames'
import { Icon } from 'antd'

const Sort = ({ sort: { title, year, active }, onClick }) =>
  <div className="sort">
    <div
      className="sort-item title"
      onClick={() => onClick('title')}
    >
      Sort by title
      {
        title
          ? <Icon type="sort-ascending" />
          : <Icon type="sort-descending" />
      }
    </div>
    <div
      className="sort-item year"
      onClick={() => onClick('year')}
    >
      Sort by year
      {
        year
          ? <Icon type="arrow-down" />
          : <Icon type="arrow-up" />
      }
    </div>
  </div>

export default Sort
