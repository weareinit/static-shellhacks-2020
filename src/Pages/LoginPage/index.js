import React from 'react'
import history from '../../history'
import LoginForm from '../../Components/LoginForm'
import ShellHacksLogo from '../../assets/branding/ShellHacks-title.svg'
import AuthStore from '../../store/AuthStore'
import { AuthStoreConsumer } from '../../store/AuthStore/Context'

import './styles.sass'

const LoginPage = ({ store }) => {
  const handleForgotPassword = () => {
    history.push('/resetPassword')
  }
  const handleSubmit = async data => {
    const success = await store.login(data)
    if (success) history.push('/dashboard')
  }
  const handleReturn = e => {
    e.preventDefault()
    history.push('/')
  }
  return (
    <div className="LoginPage">
      <div className="LoginPage__form-container">
        <div className="LoginPage__cta">
          <br></br>
          <br></br>
          <a href="/">
            <img
              className="LoginPage__title"
              src={ShellHacksLogo}
              alt="shellhacks-hackathon-logo"
            />
          </a>
          <br></br>
          <br></br>
          <p className="LoginPage__sub-title">Welcome back!</p>
          <p className="LoginPage__text"></p>
        </div>
        <LoginForm
          {...{
            handleForgotPassword,
            handleSubmit,
            handleReturn,
            loading: store.loading,
            error: store.error
          }}
        />
      </div>
      <div className="LoginPage__footer"></div>
    </div>
  )
}

// inject store into page
const HOC = () => (
  <AuthStore>
    <AuthStoreConsumer>{store => <LoginPage store={store} />}</AuthStoreConsumer>
  </AuthStore>
)

export default HOC
