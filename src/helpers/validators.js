import { validateForm } from '../validate.js'
import { toValidDateFormat } from './helpers'
import isValid from 'date-fns/is_valid'

export const completeField = (rule, value, callback) => {
  if (value) {
    !!value.match('_')
      ? callback(validateForm.releaseDate.completeMessage)
      : callback()
  } else {
    callback(validateForm.releaseDate.requiredMessage)
  }
}

export const isOutOfRange = (rule, value, callback) => {
  if (value && !value.match('_')) {
    if (new Date(toValidDateFormat(value)) > new Date()) {
      callback(validateForm.releaseDate.dateInFutureMessage)
    }

    new Date(toValidDateFormat(value)) < new Date('01.01.1800')
      ? callback(validateForm.releaseDate.outOfRangeMessage)
      : callback()
  } else {
    callback(validateForm.releaseDate.requiredMessage)
  }
}

export const correctDate = (rule, value, callback) => {
  if (value && !value.match('_')) {
    isValid(new Date(toValidDateFormat(value)))
      ? callback()
      : callback(validateForm.releaseDate.correctDateMessage)
  } else {
    callback(validateForm.releaseDate.requiredMessage)
  }
}

export const numberOfPages = (rule, value, callback) => {
  if (value) {
    value < 1 || value > 10000
      ? callback(validateForm.pages.outOfRangeMessage)
      : callback()
  } else {
    callback(validateForm.pages.requiredMessage)
  }
}

export const yearRange = (rule, value, callback) => {
  if (value) {
    if (value > new Date().getFullYear()) {
      callback(validateForm.publicationDate.dateInFutureMessage)
    }

    value < 1800
      ? callback(validateForm.publicationDate.outOfRangeMessage)
      : callback()
  } else {
    callback()
  }
}

export const ISBNValidator = (rule, value, callback) => {
  if (value) {
    value.length === 10 || value.length === 13
      ? callback()
      : callback(validateForm.ISBN.validationMessage)
  } else {
    callback()
  }
}
