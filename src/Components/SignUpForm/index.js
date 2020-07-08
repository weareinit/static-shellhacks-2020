import React, { useState } from 'react'
import { object, reach, string as yupString } from 'yup'
import { validEmail, validString, validPassword, validLastName } from '../Util/validation'
import Form from '../Common/Form'
import ReCAPTCHA from '../../Components/ReCaptcha'
import './styles.sass'

const SignUpForm = props => {
  const [captcha, setCaptcha] = useState(false)
  const [captchaRef, setcaptchaRef] = useState(null)
  const [fields, setFields] = useState({})
  const inputs = [
    {
      name: 'email',
      icon: 'email',
      placeholder: 'Email Address',
      type: 'email',
      id: 'email'
    },
    {
      name: 'firstName',
      icon: 'person',
      placeholder: 'First Name',
      type: 'firstName',
      id: 'firstName'
    },
    {
      name: 'lastName',
      icon: 'person',
      placeholder: 'Last Name',
      type: 'lastName',
      id: 'lastName'
    },
    {
      name: 'password',
      icon: 'lock',
      placeholder: 'Password',
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
    email: validEmail(),
    firstName: validString(),
    lastName: validLastName(),
    password: validPassword(),
    captcha: yupString().required('Captcha validation is required')
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
    firstName: async firstName => await validateHelper(firstName, 'firstName'),
    lastName: async lastName => await validateHelper(lastName, 'lastName'),
    password: async password => await validateHelper(password, 'password')
  }

  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  }

  const onSubmit = ({ confirmPassword, ...values }) => {
    setFields(values)
    setCaptcha(true)
  }

  const onChange = token => {
    captchaRef.reset()
    setCaptcha(false)
    props.handleSubmit({ ...fields, token })
  }

  const Footer = () => (
    <>
      <button onClick={props.handleReturn} className="SignUpForm__return-btn">
        Home
      </button>

      <a className="SignUpForm__login-btn" href="/login">
        Already have an account? Click here to sign in
      </a>
    </>
  )

  return (
    <div className="SignUpForm-wrapper">
      <Form
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        className="SignUpForm"
        inputs={inputs}
        buttonText={'Create Account'}
        fieldValidation={fieldValidation}
        Component={Footer}
        store={props}
      />
      <br></br>
      <ReCAPTCHA shouldShow={captcha} onChange={onChange} captchaRef={setcaptchaRef} />
    </div>
  )
}

export default SignUpForm
