import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import HomePage from './Pages/Home'
import DashBoard from './Pages/Dashboard'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
import ApplicationPage from './Pages/ApplicationPage'
import VerifyEmailPage from './Pages/VerifyEmailPage'
// import ProfilePage from './Pages/ProfilePage'
import ResetPasswordPage from './Pages/ResetPasswordPage'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" exact component={DashBoard} />
        {/* <Route path="/signUp" exact component={SignUpPage} /> */}
        <Route path="/login" exact component={LoginPage} />
        <Route path="/application" exact component={ApplicationPage} />
        {/* <Route path="/profile" exact component={ProfilePage} /> */}
        <Route path="/verify/:token" exact component={VerifyEmailPage} />
        <Route path="/resetPassword/:token?" exact component={ResetPasswordPage} />
      </Switch>
    </Router>
  )
}

export default App
