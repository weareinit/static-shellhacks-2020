import React from 'react'
import { object, reach } from 'yup'
import { validPassword } from '../Util/validation'
import Form from '../Common/Form'
import './styles.sass'

const ResetPasswordEmail = props => {
  const inputs = [
    {
      name: 'password',
      icon: 'lock',
      placeholder: 'password',
      type: 'password',
      id: 'password'
    },
    {
      name: 'confirmPassword',
      icon: 'lock',
      placeholder: 'Confirm Password',
      type: 'password',
      id: 'confirmPassword'
    }
  ]

  inputs.forEach(input => {
    input.className = 'SignUpForm__input'
  })

  const validate = values => {
    const errors = {}
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must match'
    }
    return errors
  }

  const schema = object().shape({
    password: validPassword()
  })

  const validateHelper = async (value, path) =>
    reach(schema, path)
      .validate(value)
      .then(() => null)
      .catch(err => {
        return err.errors[0]
      })

  const fieldValidation = {
    password: async password => await validateHelper(password, 'password')
  }

  const initialValues = {
    password: '',
    confirmPassword: ''
  }

  const onSubmit = values => {
    props.handleSubmit(values)
  }

  const Footer = () => (
    <div className="LoginForm__footer" onClick={props.handleCreateAccount}>
      <button className="LoginForm__create-account-btn">Login</button>
    </div>
  )

  return (
    <Form
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      inputs={inputs}
      buttonText={'Submit'}
      className="LoginForm"
      fieldValidation={fieldValidation}
      Component={Footer}
      store={props}
    />
  )
}

export default ResetPasswordEmail
