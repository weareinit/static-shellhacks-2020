import React from 'react'
import { object, reach, string } from 'yup'
import { validEmail } from '../Util/validation'
import Form from '../Common/Form'
import './styles.sass'

const LoginForm = props => {
  const inputs = [
    {
      name: 'email',
      icon: 'email',
      placeholder: 'Email Address',
      type: 'email',
      id: 'email'
    },
    {
      name: 'password',
      icon: 'lock',
      placeholder: 'Password',
      type: 'password',
      id: 'password'
    }
  ]

  inputs.forEach(input => {
    input.className = 'SignUpForm__input'
  })

  const schema = object().shape({
    email: validEmail(),
    password: string().required('Password is required')
  })

  const validateHelper = async (value, path) =>
    reach(schema, path)
      .validate(value)
      .then(() => null)
      .catch(err => {
        return err.errors[0]
      })

  const fieldValidation = {
    email: async email => await validateHelper(email, 'email'),
    password: async password => await validateHelper(password, 'password')
  }

  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = values => {
    props.handleSubmit(values)
  }

  const Footer = () => (
    <div className="LoginForm__footer">
      <button className="LoginForm__create-account-btn" onClick={props.handleCreateAccount}>
        Create Account
      </button>
      <button onClick={props.handleReturn} className="SignUpForm__return-btn">
        Home
      </button>
      <button className="LoginForm__forgot-password-btn" onClick={props.handleForgotPassword}>
        Forgot Password?
      </button>
    </div>
  )

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      inputs={inputs}
      buttonText={'Login'}
      className="LoginForm"
      fieldValidation={fieldValidation}
      Component={Footer}
      store={props}
    />
  )
}

export default LoginForm
