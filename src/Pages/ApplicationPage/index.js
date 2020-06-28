import React, { useState } from 'react'
import history from '../../history'
import _ from 'lodash'
import Input from '../../Components/Common/Input'
import ApplicationForm from '../../Components/ApplicationForm'
import ApplicationStore from '../../store/ApplicationStore'
import { ApplicationStoreConsumer } from '../../store/ApplicationStore/Context'
import AuthPage from '../../Shells/AuthPage'
import DashboardContainer from '../../Shells/DashboardContainer'

import './styles.sass'

const ApplicationPage = ({ store }) => {
  const [error, setError] = useState('')
  const handleSubmit = async data => {
    setError('')
    const message = await store.create(data)
    if (message.success) history.push('/dashboard')
    setError(message.error)
  }
  const resendVerificationEmail = e => {
    e.preventDefault()
    store.resendVerificationEmail().then(message => {
      alert(message)
    })
  }

  const formatApplication = a => {
    const app = { ...a }
    delete app._id
    delete app.userId
    delete app.resumeUrl
    delete app.__v
    app.howDidYouHearAboutShellhacks = app.howDidYouHear
    delete app.howDidYouHear
    app.needTravelReinbursement = app.travelReinbursement ? 'yes' : 'no'
    delete app.travelReinbursement
    app.dateOfBirth = app.dob
    delete app.dob
    app.attendedShellhacksBefore = app.attendedShellHacks ? 'yes' : 'no'
    delete app.attendedShellHacks
    return (
      <div className="ApplicationPreview">
        {Object.keys(app).map(k => {
          const key = k.replace('ShellHacks', 'Shellhacks')
          const props = {
            name: key,
            label: _.startCase(key),
            type: 'display',
            value: app[key],
            className: 'ApplicationPreview__input'
          }
          return <Input key={key} {...props}></Input>
        })}
      </div>
    )
  }
  if (!store.user?.verified) {
    return (
      <div className="Verification">
        <div className="Verification__body">
          <h1>Please verify your email before filling out the application</h1>
          <p>
            Check your inbox and junk mail for a verification email from ShellHacks. If you have not received an
            email, you can click the button to resend the email.
          </p>
          <button onClick={resendVerificationEmail}>Resend Verification</button>
          <br />
        </div>
      </div>
    )
  }
  if (store.application) {
    return (
      <div className="Verification">
        <div className="Verification__body">
          <h1>It seems that you've already filled out an application for Shellhacks</h1>
          <p>here is an overview of the submitted application</p>
          <br />
          {formatApplication(store.application)}
        </div>
      </div>
    )
  }
  return (
    <div className="ApplicationPage">
      <div className="ApplicationPage__form-container">
        <div className="ApplicationPage__header">
          <p className="ApplicationPage__title">Application</p>
          <p className="ApplicationPage__sub-title">
            Please fill out the application below (* are mandatory fields)
          </p>
        </div>
        <ApplicationForm
          {...{
            handleSubmit,
            loading: store.loading,
            error: error
          }}
        />
      </div>
      <div className="ApplicationPage__footer"></div>
    </div>
  )
}

// inject store into page
const HOC = props => (
  <ApplicationStore>
    <ApplicationStoreConsumer>
      {store => <ApplicationPage store={{ ...store, ...props.store }} />}
    </ApplicationStoreConsumer>
  </ApplicationStore>
)

export default () => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <DashboardContainer isOpen={isOpen} setIsOpen={setisOpen} page="application">
      <AuthPage Component={HOC} />
    </DashboardContainer>
  )
}
