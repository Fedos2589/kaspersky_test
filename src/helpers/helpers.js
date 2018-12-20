import toPairs from 'lodash/toPairs'

export const toValidDateFormat = (value) => value.split('.').reverse().join('-')

export const authorsToFields = (authors) => {
	let authorsFields = {}

	authors.map((author, i) =>
		authorsFields = {
			...authorsFields,
			[`name${i}`]: author.name,
      [`surname${i}`]: author.surname,
		})

	return authorsFields
}

export const formatValuesFromFields = (values) => {
	let authors = []
	let names = toPairs(values).filter(item => item[0].startsWith('name'))
	let surnames = toPairs(values).filter(item => item[0].startsWith('surname'))

	names.forEach((item, i) => authors.push({ name: item[1], surname: surnames[i][1]}))

	return ({ ...values, authors: authors })
}
