import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormView from './FormView'
import find from 'lodash/find'
import { authorsToFields, formatValuesFromFields } from '../helpers/helpers'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.location.state ? this.getInitialState() : { authors: [{}] }
  }

  getInitialState = () => find(this.props.books, (book) => book.ISBN === this.props.location.state.ISBN)

  onInputChange = (id, value) => this.setState({ [id]: value })

  setAuthor = (field, index, value) =>
    this.setState({ authors: this.state.authors.map((author, i) =>
      i === index
        ? ({ ...author, [field]: value })
        : author
    )})

  addAuthor = () => this.setState({ authors: [...this.state.authors, {}] })

  deleteAuthor = (i, setFieldsValue) =>
    this.setState(
      { authors: this.state.authors.filter((author, index) => i !== index) },
      () => setFieldsValue({ ...authorsToFields(this.state.authors) })
    )

  handleSubmit = (e, form, formType) => {
    const { dispatch } = this.props
    e.preventDefault()

    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: formType,
          payload: formatValuesFromFields(values)
        })
      }
    })
  }

  render() {
    return (
      <div className="container">
        <FormView
          handleSubmit={this.handleSubmit}
          onInputChange={this.onInputChange}
          setAuthor={this.setAuthor}
          addAuthor={this.addAuthor}
          deleteAuthor={this.deleteAuthor}
          {...this.state}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  books: store
})

export default connect(mapStateToProps, null)(Form)
