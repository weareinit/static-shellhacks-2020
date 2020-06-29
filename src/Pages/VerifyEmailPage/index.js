import React, { useState, useEffect } from 'react'
import Loading from '../../Components/Common/Loading'
import AuthStore from '../../store/AuthStore'
import { AuthStoreConsumer } from '../../store/AuthStore/Context'
import './styles.sass'

const VerifyEmailPage = ({ store }) => {
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  useEffect(() => {
    store.verifyEmail(store.match.params.token).then(data => {
      setError(data.error)
      setMessage(data.message)
    })
    setLoading(false)
  }, [])

  const resendVerificationEmail = e => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    store.resendVerificationEmail().then(message => {
      setMessage(message)
      setLoading(false)
    })
  }

  if (loading) {
    return (
      <div className="VerifyEmailPage">
        <Loading />
      </div>
    )
  }

  return (
    <div className="VerifyEmailPage">
      <div className="VerifyEmailPage__body">
        <h1>{message}</h1>
        {error && <button onClick={resendVerificationEmail}>Resend verification link</button>}
        {!error && (
          <a href="/dashboard">
            <button>Dashboard</button>
          </a>
        )}
      </div>
    </div>
  )
}

const HOC = s => (
  <AuthStore>
    <AuthStoreConsumer>{store => <VerifyEmailPage store={{ ...store, ...s }} />}</AuthStoreConsumer>
  </AuthStore>
)

export default HOC
