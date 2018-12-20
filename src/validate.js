export const validateForm = {
  title: {
    requiredMessage: "Required field",
    lengthMessage: "Up to 30 characters"
  },
  name: {
    requiredMessage: "Required field",
    lengthMessage: "Up to 20 characters",
    validationMessage: "Сontains invalid characters"
  },
  surname: {
    requiredMessage: "Required field",
    lengthMessage: "Up to 20 characters",
    validationMessage: "Сontains invalid characters"
  },
  releaseDate: {
    completeMessage: "Please fill in the field completely",
    outOfRangeMessage: "Please indicate the date no earlier than 01.01.1800",
    correctDateMessage: "Incorrect date",
    dateInFutureMessage: "Date is in the future"
  },
  pages: {
    requiredMessage: "Required field",
    outOfRangeMessage: "The number of pages must be greater than 0 and not more than 10,000"
  },
  publisher: {
    lengthMessage: "Up to 30 characters"
  },
  publicationDate: {
    outOfRangeMessage: "Not earlier than 1800",
    dateInFutureMessage: "Date is in the future",
    validationMessage: "Only digits"
  },
  ISBN: {
    validationMessage: "Incorrect ISBN, must contain 10 or 13 digits",
    patternMessage: "Only digits"
  },
}
