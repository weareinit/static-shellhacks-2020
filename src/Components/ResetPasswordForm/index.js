import React from 'react'
import { object, reach, string } from 'yup'
import { validEmail } from '../Util/validation'
import Form from '../Common/Form'
import './styles.sass'

const ResetPasswordEmail = props => {
  const inputs = [
    {
      name: 'email',
      icon: 'email',
      placeholder: 'Email Address',
      type: 'email',
      id: 'email'
    }
  ]

  inputs.forEach(input => {
    input.className = 'SignUpForm__input'
  })

  const schema = object().shape({
    email: validEmail()
  })

  const validateHelper = async (value, path) =>
    reach(schema, path)
      .validate(value)
      .then(() => null)
      .catch(err => {
        return err.errors[0]
      })

  const fieldValidation = {
    email: async email => await validateHelper(email, 'email')
  }

  const initialValues = {
    email: ''
  }

  const onSubmit = values => {
    props.handleSubmit(values)
  }

  const Footer = () => (
    <div className="LoginForm__footer--">
      <button className="LoginForm__create-account-btn" onClick={props.handleCreateAccount}>Back</button>
      <button className="SignUpForm__return-btn" onClick={props.handleReturn} > Home </button>
    </div>
  )

  return (
    <Form
      initialValues={initialValues}
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
