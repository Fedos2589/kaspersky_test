import React, { Component } from 'react'
import { Input, Row, Col } from 'antd'
import { validateForm } from '../validate'

const Author = ({ author, onInputChange, getFieldDecorator, FormItem }) =>
  <Row>
    <Col sm={24} md={12}>
      <FormItem hasFeedback={true}>
        {
          getFieldDecorator(
            'name', {
              validateTrigger: ["onChange", "onBlur"],
              rules: [
                {
                  pattern: new RegExp(/^[]+$/),
                  message: validateForm.name.validationMessage
                },
                {
                  max: 20,
                  message: validateForm.name.lengthMessage
                },
                {
                  required: true,
                  whitespace: true,
                  message: validateForm.name.requiredErrorMessage
                }
              ]
            })(
                <Input size='large' onChange={(e) => onInputChange('name', e.target.value)} />
              )
        }
        <div className='label'>
          Name
        </div>
      </FormItem>
    </Col>
    <Col sm={24} md={12}>
      <FormItem hasFeedback={true}>
        {
          getFieldDecorator(
            'surname', {
              validateTrigger: ["onChange", "onBlur"],
              rules: [
                {
                  pattern: new RegExp(/^[]+$/),
                  message: validateForm.surname.validationMessage
                },
                {
                  max: 20,
                  message: validateForm.surname.lengthMessage
                },
                {
                  required: true,
                  whitespace: true,
                  message: validateForm.surname.requiredErrorMessage
                }
              ]
            })(
                <Input size='large'  onChange={(e) => onInputChange('surname', e.target.value)} />
              )
        }
        <div className='label'>
          Surname
        </div>
      </FormItem>
    </Col>
  </Row>

export default Author
