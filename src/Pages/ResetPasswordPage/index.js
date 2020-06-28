import React from 'react'
import history from '../../history'
import ResetPasswordForm from '../../Components/ResetPasswordForm'
import ResetPasswordForm2 from '../../Components/ResetPasswordForm2'
import AuthStore from '../../store/AuthStore'
import { AuthStoreConsumer } from '../../store/AuthStore/Context'
import ShellHacksLogo from '../../assets/branding/ShellHacks-title.svg'

import './styles.sass'

const ResetPasswordPage = ({ store }) => {
  const handleCreateAccount = () => {
    history.push('/login')
  }
  const handleSubmit = async data => {
    const message = await store.resetPasswordRequest(data.email)
    alert(message)
  }
  const handleReturn = e => {
    e.preventDefault()
    history.push('/')
  }
  return (
    <div className="ResetPasswordPage">
      <div className="ResetPasswordPage__form-container">
        <div className="ResetPasswordPage__cta">
          <a href="/">
            <img
              className="LoginPage__title"
              src={ShellHacksLogo}
              alt="shellhacks-hackathon-logo"
            />
          </a>
          <p className="ResetPasswordPage__sub-title">Forgot your password?</p>
          <p className="ResetPasswordPage__text">
            Enter your email and we'll send you a link to reset your password
          </p>
        </div>
        <ResetPasswordForm
          {...{
            handleCreateAccount,
            handleSubmit,
            handleReturn,
            loading: store.loading,
            error: store.error
          }}
        />
      </div>
      <div className="ResetPasswordPage__footer"></div>
    </div>
  )
}

const ResetPasswordPage2 = ({ store, match }) => {
  const handleCreateAccount = () => {
    history.push('/login')
  }
  const handleSubmit = async data => {
    const message = await store.resetPassword(data.password, match.params.token)
    alert(message)
  }
  return (
    <div className="ResetPasswordPage">
      <div className="ResetPasswordPage__form-container">
        <div className="ResetPasswordPage__cta">
          <p className="ResetPasswordPage__sub-title">Enter your new password!</p>
        </div>
        <ResetPasswordForm2
          {...{
            handleCreateAccount,
            handleSubmit,
            loading: store.loading,
            error: store.error
          }}
        />
      </div>
      <div className="ResetPasswordPage__footer"></div>
    </div>
  )
}

const Component = props => {
  return props.match.params.token ? (
    <ResetPasswordPage2 {...props} />
  ) : (
    <ResetPasswordPage {...props} />
  )
}

// inject store into page
const HOC = props => (
  <AuthStore>
    <AuthStoreConsumer>{store => <Component {...props} store={store} />}</AuthStoreConsumer>
  </AuthStore>
)

export default HOC
