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
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must have at least one uppercase letter, lowercase letter, one number and one special character'
    )
    .min(8, min)
    .max(20, max)
}

export const validPhoneNumber = (
  message = 'Phone number must be one of the following format XXX-XXX-XXXX'
) => {
  return yup.string().matches(/^\d{3}-\d{3}-\d{4}$/, message)
}

const getValidDobRange = () => {
  let eventDate = moment(new Date(2020, 9, 11), 'YYYYMMDD')
  const max = moment(eventDate)
    .subtract(18, 'years') // 18yrs from shellhacks
    .format('YYYY-MM-DD')
  return max
}

export const validDate = (
  max = 'Date must be in the following format DD/MM/YYYY & Must be at least 18 years old',
  required = 'Date is required'
) => {
  return yup
    .date()
    .transform((_, org) => {
      const valid = RegExp(/^[\d]{2}\/[\d]{2}\/[\d]{4}$/).test(org)
      return valid ? _ : new Date()
    })
    .max(new Date(getValidDobRange()), max)
    .required(required)
}

export const validPDF = () => {
  const FILE_SIZE = Math.sqrt(1024, 2) * 1000
  const SUPPORTED_FORMATS = ['application/pdf']
  return yup
    .mixed()
    .test('fileSize', 'File Size is too large', value => value.size > FILE_SIZE)
    .test('fileType', 'Unsupported File Format', value => SUPPORTED_FORMATS.includes(value.type))
}
