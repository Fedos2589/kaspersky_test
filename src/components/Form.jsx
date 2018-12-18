import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormView from './FormView'
import find from 'lodash/find'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState(() => find(this.props.books, (book) => book.ISBN === this.props.location.state.ISBN))
    }
  }

  onInputChange = (id, value) => this.setState({ [id]: value })

  handleSubmit = (e, form) => {
    e.preventDefault()
    const { agreement, token, orderId } = this.state

    form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <FormView
          handleSubmit={this.handleSubmit}
          onInputChange={this.onInputChange}
          ISBN={this.props.location.state ? this.props.location.state.ISBN : ''}
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
