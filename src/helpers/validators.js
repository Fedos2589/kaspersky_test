import { validateForm } from '../validate.js'
import { arraymove } from './helpers.js'
import differenceInYears from 'date-fns/difference_in_years'
import isFuture from 'date-fns/is_future'
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
  if (value) {
    let dateDiff = differenceInYears(
      new Date(Date.now()),
      new Date(arraymove(value.split('.'), 1, 0).join('/'))
    )

    if (isFuture(new Date(arraymove(value.split('.'), 1, 0).join('/')))) {
      callback(validateForm.releaseDate.dateInFutureMessage)
    }

    dateDiff > 114
      ? callback(validateForm.releaseDate.outOfAgeRangeMessage)
      : callback()
  } else {
    callback(validateForm.releaseDate.requiredMessage)
  }
}

export const correctDate = (rule, value, callback) => {
  if (value && !value.match('_')) {
    isValid(value)
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
      callback(validateForm.year.dateInFutureMessage)
    }

    value < 1800
      ? callback(validateForm.pages.outOfRangeMessage)
      : callback()
  } else {
    callback(validateForm.pages.requiredMessage)
  }
}
