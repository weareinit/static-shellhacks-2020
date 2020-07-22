import * as yup from 'yup'
import moment from 'moment'

export const validEmail = (
  invalidEmail = 'Field must be a valid email',
  requiredField = 'Email is required'
) => {
  return yup
    .string()
    .email(invalidEmail)
    .required(requiredField)
}

export const validString = (
  max = 'Field cannot be longer than 20 characters',
  requiredField = 'This field is required'
) => {
  return yup
    .string()
    .max(20, max)
    .required(requiredField)
}

export const validPassword = (
  min = 'Password must be a minimum of 8 characters',
  max = 'Password cannot be longer than 20 character'
) => {
  return yup
    .string()
    .min(8, min)
    .max(30, max)
}

export const validPhoneNumber = (
  message = 'Phone number must be in the following format XXX-XXX-XXXX'
) => {
  return yup.string().matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, message)
}

const getValidDobRange = () => {
  let eventDate = moment(new Date(2020, 9, 11), 'YYYYMMDD')
  const max = moment(eventDate).subtract(18, 'years')
  return max
}

export const validDate = (
  max = 'Must be at least 18 years old',
  required = 'Date is required',
  format = 'Date must be in the following format MM/DD/YYYY'
) => {
  return yup
    .mixed()
    .test('required', required, value => value.length > 0)
    .test('format', format, value => RegExp(/^[\d]{2}\/[\d]{2}\/[\d]{4}$/).test(value))
    .test('max', max, value => getValidDobRange().isSameOrAfter(value))
}

export const validPDF = () => {
  const FILE_SIZE = Math.sqrt(1024, 2) * 1000
  const SUPPORTED_FORMATS = ['application/pdf']
  return yup
    .mixed()
    .test('fileSize', 'File Size is too large', value => value.size > FILE_SIZE)
    .test('fileType', 'Unsupported File Format', value => SUPPORTED_FORMATS.includes(value.type))
}

export const validURL = () => {
  return yup.mixed().test('url,', 'Please enter a valid url', value => {
    if (!value) {
      return true
    }
    return RegExp(
      /^((http|https):\/\/){0,1}(www.){0,1}[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[-a-zA-Z0-9@:%._\+~#=\/]{1,256}$/
    ).test(value)
  })
}

export const validFirstName = () => {
  return yup
    .string()
    .matches(
      /^\w{2,20}((\s|-)\w{2,20})?((\s|-)\w{2,20})?((\s|-)\w{2,20})?((\s|-)\w{2,20})?((\s|-)\w{2,20})?$/,
      'Must only contain letters, spaces, and hyphens'
    )
}

export const validLastName = () => {
  return yup
    .string()
    .matches(
      /^\w{2,20}((\s|-)\w{2,20})?((\s|-)\w{2,20})?((\s|-)\w{2,20})?((\s|-)\w{2,20})?((\s|-)\w{2,20})?$/,
      'Must only contain letters, spaces, and hyphens'
    )
}
