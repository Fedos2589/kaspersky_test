import React, { Component } from 'react'
import { Form, Input, Checkbox, Button, Row, Col } from 'antd'
import MaskedInput from 'react-text-mask'
import { validateForm } from '../validate'
import { completeField, isOutOfRange, correctDate, yearRange, numberOfPages } from '../helpers/validators'
import classNames from 'classnames'
import Author from './Author'

const FormItem = Form.Item

class FormView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      maskPlaceholder: false
    }
  }

  handleFocus = () => this.setState({ maskPlaceholder: true })

  handleBlur = (value) => {
    if (!value) this.setState({ maskPlaceholder: false })
  }

  render() {
    const { ISBN, handleSubmit, onInputChange, authors, form } = this.props

    const { getFieldDecorator } = form

    return (
      <Form onSubmit={(e) => handleSubmit(e, form)} className="form">
        <h1 className="page-title">{ISBN ? 'Edit record' : 'Add record'}</h1>
        <Row>
          <Col sm={24}>
            <FormItem hasFeedback={true}>
              {
                getFieldDecorator(
                  'title', {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [
                      {
                        max: 30,
                        message: validateForm.title.lengthMessage
                      },
                      {
                        required: true,
                        whitespace: true,
                        message: validateForm.title.requiredErrorMessage
                      }
                    ]
                  })(
                      <Input size='large' onChange={(e) => onInputChange('title', e.target.value)} />
                    )
              }
              <div className='label'>
                Title
              </div>
            </FormItem>
          </Col>
        </Row>
        {
        	authors
	        	? authors.map(author =>
			        	<Author
			        		author={author}
			        		onInputChange={onInputChange}
			        		getFieldDecorator={getFieldDecorator}
			        		FormItem={FormItem}
			        	/>
			        )
	        	: <Author
		        		author={{ name: '', surname: ''}}
		        		onInputChange={onInputChange}
		        		getFieldDecorator={getFieldDecorator}
		        		FormItem={FormItem}
		        	/>
        }
        <Row>
        	<Col sm={24} md={6}>
            <FormItem hasFeedback={true}>
              {
                getFieldDecorator(
                  'pages', {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [
                      {
                        validator: numberOfPages,
                      },
                      {
                        required: true,
                        whitespace: true,
                        message: validateForm.title.requiredErrorMessage
                      }
                    ]
                  })(
                      <Input size='large' onChange={(e) => onInputChange('pages', e.target.value)} />
                    )
              }
              <div className='label'>
                Title
              </div>
            </FormItem>
          </Col>
          <Col sm={24} md={12}>
            <FormItem hasFeedback={true}>
              {
                getFieldDecorator(
                  'publisher', {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [
                      {
                        max: 30,
                        message: validateForm.publisher.lengthMessage
                      }
                    ]
                  })(
                      <Input size='large' onChange={(e) => onInputChange('publisher', e.target.value)} />
                    )
              }
              <div className='label'>
                Publisher
              </div>
            </FormItem>
          </Col>
          <Col sm={24} md={6}>
            <FormItem hasFeedback={true}>
              {
                getFieldDecorator(
                  'year', {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [
                      {
                        validator: yearRange
                      }
                    ]
                  })(
                      <Input size='large' onChange={(e) => onInputChange('year', e.target.value)} />
                    )
              }
              <div className='label'>
                Year
              </div>
            </FormItem>
          </Col>
        </Row>
        <Row>
        	<Col sm={24} md={12}>
            <FormItem hasFeedback={true}>
              {
                getFieldDecorator(
                  'releaseDate', {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [
                      {
                        required: true,
                        message: validateForm.releaseDate.requiredErrorMessage
                      },
                      {
                        validator: completeField
                      },
                      {
                        validator: correctDate
                      },
                      {
                        validator: isOutOfRange
                      }
                    ]
                  })(
                      <MaskedInput
                        mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                        placeholder='__.__.____'
                        type='tel'
                        className='ant-input ant-input-lg'
                        ref={() => <Input />}
                        onChange={(e) => onInputChange('releaseDate', e.target.value)}
                      />
                    )
              }
              <div className='label'>
                Release date
              </div>
            </FormItem>
          </Col>
          <Col sm={24} md={12}>
            <FormItem hasFeedback={true}>
              {
                getFieldDecorator(
                  'ISBN', {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [
                      {
                        required: true,
                        message: validateForm.name.requiredErrorMessage
                      }
                    ]
                  })(
                      <Input size='large' onChange={(e) => onInputChange('ISBN', e.target.value)} />
                    )
              }
              <div className='label'>
                ISBN
              </div>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}

const WrappedForm = Form.create()(FormView)
export default WrappedForm
