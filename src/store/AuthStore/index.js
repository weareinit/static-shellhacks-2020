import React, { useState } from 'react'
import { AuthStoreProvider } from './Context'
import IAMAPI from '../../API/IAMAPI'

const createState = uState => {
  return initialValue => {
    const [value, set] = uState(initialValue)
    return { value, set }
  }
}

const AuthStore = ({ children }) => {
  const st = createState(useState)
  const user = st(null)
  const loading = st(false)
  const error = st('')

  const signUp = data => {
    loading.set(true)
    error.set('')
    return IAMAPI.signUp(data)
      .then(({ data }) => {
        loading.set(false)
        localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN, data.token)
        return true
      })
      .catch(err => {
        loading.set(false)
        error.set(
          err.response ? err.response.data.message : 'There was an error, please try again later'
        )
      })
  }

  const getUser = async () => {
    loading.set(true)
    error.set('')
    return IAMAPI.getUser()
      .then(data => {
        user.set(data)
        loading.set(false)
        return true
      })
      .catch(err => {
        error.set(err)
        loading.set(false)
      })
  }

  const login = payload => {
    loading.set(true)
    error.set('')
    return IAMAPI.login(payload)
      .then(data => {
        loading.set(false)
        localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN, data.token)
        return true
      })
      .catch(err => {
        loading.set(false)
        error.set(
          err.response ? err.response.data.message : 'There was an error,please try again later'
        )
      })
  }

  const logout = () => {
    localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN)
    user.set(null)
  }

  const verifyEmail = token => {
    loading.set(true)
    error.set('')
    return IAMAPI.verifyEmail(token)
      .then(data => data)
      .catch(err => {
        return err.response
          ? err.response.data
          : { error: true, message: 'There was an error,please try again later' }
      })
  }

  const resendVerificationEmail = () => {
    return IAMAPI.resendVerificationEmail()
      .then(data => {
        return data.message
      })
      .catch(err => {
        return err.response
          ? err.response.data.message
          : 'There was an error,please try again later'
      })
  }

  const resetPasswordRequest = email => {
    return IAMAPI.resetPasswordRequest(email)
      .then(data => {
        return data.message
      })
      .catch(err => {
        return err.response
          ? err.response.data.message
          : 'There was an error,please try again later'
      })
  }

  const resetPassword = (password, token) => {
    return IAMAPI.resetPassword(password, token)
      .then(data => {
        return data.message
      })
      .catch(err => {
        return err.response
          ? err.response.data.message
          : 'There was an error,please try again later'
      })
  }

  const store = {
    user: user.value,
    loading: loading.value,
    error: error.value,
    getUser,
    login,
    signUp,
    logout,
    verifyEmail,
    resendVerificationEmail,
    resetPasswordRequest,
    resetPassword
  }

  return <AuthStoreProvider value={store}>{children}</AuthStoreProvider>
}

export default AuthStore
