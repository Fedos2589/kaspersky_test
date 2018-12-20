import React, { Component } from 'react'
import { Input, Row, Col } from 'antd'
import { validateForm } from '../validate'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

class Author extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const { author, index, setFieldsValue } = this.props

    if (author) {
      setFieldsValue({
        [`name${index}`]: author.name,
        [`surname${index}`]: author.surname,
      })
    }
  }

  render() {
    const {
      author,
      onInputChange,
      getFieldDecorator,
      setFieldsValue,
      FormItem,
      index,
      last,
      only,
      addAuthor,
      deleteAuthor,
      setAuthor
    } = this.props

    return (
      <Row >
        <Col sm={20} md={10}>
          <FormItem hasFeedback={true}>
            {
              getFieldDecorator(
                `name${index}`, {
                  validateTrigger: ["onChange", "onBlur"],
                  rules: [
                    {
                      pattern: new RegExp(/^[a-zA-ZА-Яа-яЁё'-\s\.]+$/),
                      message: validateForm.name.validationMessage
                    },
                    {
                      max: 20,
                      message: validateForm.name.lengthMessage
                    },
                    {
                      required: true,
                      message: validateForm.name.requiredMessage
                    }
                  ]
                })(
                    <Input size='large' onChange={(e) => setAuthor('name', index, e.target.value)} />
                  )
            }
            <div className='label'>
              Name
            </div>
          </FormItem>
        </Col>
        <Col sm={20} md={10}>
          <FormItem hasFeedback={true}>
            {
              getFieldDecorator(
                `surname${index}`, {
                  validateTrigger: ["onChange", "onBlur"],
                  rules: [
                    {
                      pattern: new RegExp(/^[a-zA-ZА-Яа-яЁё'-\s\.]+$/),
                      message: validateForm.surname.validationMessage
                    },
                    {
                      max: 20,
                      message: validateForm.surname.lengthMessage
                    },
                    {
                      required: true,
                      message: validateForm.surname.requiredMessage
                    }
                  ]
                })(
                    <Input size='large' onChange={(e) => setAuthor('surname', index, e.target.value)} />
                  )
            }
            <div className='label'>
              Surname
            </div>
          </FormItem>
        </Col>
        <Col sm={4} md={4}>
          {last && (
            <Link to="/form" style={{ lineHeight: '60px' }} onClick={addAuthor} >
              <Icon type="plus" style={{ marginRight: '7px' }} />
            </Link>
          )}
          { !only && (
            <Link to="/form" style={{ lineHeight: '60px' }} onClick={() => deleteAuthor(index, setFieldsValue)}>
              <Icon type="delete" />
            </Link>
          )}
        </Col>
      </Row>
    )
  }
}

export default Author
