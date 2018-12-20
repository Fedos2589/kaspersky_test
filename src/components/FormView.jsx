import React, { Component } from 'react'
import { Form, Input, Checkbox, Button, Row, Col, Upload, Icon, message } from 'antd'
import MaskedInput from 'react-text-mask'
import { validateForm } from '../validate'
import {
  completeField,
  isOutOfRange,
  correctDate,
  yearRange,
  numberOfPages,
  ISBNValidator
} from '../helpers/validators'
import { authorsToFields, requestCreator } from '../helpers/helpers'
import classNames from 'classnames'
import Author from './Author'
import { Link } from 'react-router-dom'
import cors from 'cors'

const FormItem = Form.Item
const Dragger = Upload.Dragger

class FormView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      maskPlaceholder: false
    }
  }

  componentDidMount () {
    this.setFields()
    this.setFormType()
  }

  setFields = () => this.props.form.setFieldsValue({ ...this.props, ...authorsToFields(this.props.authors) })

  setFormType = () => this.setState({ formType: this.props.ISBN ? 'EDIT' : 'ADD' })

  handleFocus = () => this.setState({ maskPlaceholder: true })

  handleBlur = (value) => value ? '' : this.setState({ maskPlaceholder: false })

  dragHandle = (file) =>
    requestCreator('https://api.imgur.com/3/image/', 'post', { image: file })
      .then(res => console.log(res))
      .catch(error => console.log(error))

  render() {
    const {
      ISBN,
      authors,
      handleSubmit,
      onInputChange,
      form,
      addAuthor,
      deleteAuthor,
      setAuthor
    } = this.props

    const { getFieldDecorator, setFieldsValue } = form

    return (
      <Form onSubmit={(e) => handleSubmit(e, form, this.state.formType)} className="form">
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
                        message: validateForm.title.requiredMessage
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
          authors.map((author, i) =>
            <Author
              onInputChange={onInputChange}
              getFieldDecorator={getFieldDecorator}
              FormItem={FormItem}
              index={i}
              setFieldsValue={setFieldsValue}
              last={i === authors.length - 1}
              only={authors.length === 1}
              addAuthor={addAuthor}
              deleteAuthor={deleteAuthor}
              setAuthor={setAuthor}
              key={i}
            />
          )
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
                        pattern: new RegExp(/^[\d]+$/),
                        message: validateForm.pages.validationMessage
                      },
                      {
                        required: true,
                        whitespace: true,
                        message: validateForm.pages.requiredMessage
                      },
                      {
                        validator: numberOfPages
                      }
                    ]
                  })(
                      <Input size='large' onChange={(e) => onInputChange('pages', e.target.value)} />
                    )
              }
              <div className='label'>
                Pages
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
                  'publicationDate', {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [
                      {
                        pattern: new RegExp(/^[\d]+$/),
                        message: validateForm.publicationDate.validationMessage
                      },
                      {
                        validator: yearRange
                      }
                    ]
                  })(
                      <Input size='large' onChange={(e) => onInputChange('publicationDate', e.target.value)} />
                    )
              }
              <div className='label'>
                Publication date
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
                        pattern: new RegExp(/^[\d]+$/),
                        message: validateForm.ISBN.patternMessage
                      },
                      {
                        validator: ISBNValidator
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
          <Col sm={{ span: 24 }} >
            <Dragger name={ISBN} action={this.dragHandle}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single upload. Strictly prohibit from uploading company data or other band files
              </p>
            </Dragger>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 24 }} >
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="main-button"
              >
                Submit
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}

const WrappedForm = Form.create()(FormView)
export default WrappedForm
