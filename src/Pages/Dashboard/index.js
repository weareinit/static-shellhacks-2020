import React, { useState } from 'react'
import AuthPage from '../../Shells/AuthPage'
import DashboardContainer from '../../Shells/DashboardContainer'
import ApplicationStore from '../../store/ApplicationStore/'
import { ApplicationStoreConsumer } from '../../store/ApplicationStore/Context'
import './styles.sass'

const DashBoard = ({ store }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <DashboardContainer isOpen={isOpen} setIsOpen={setIsOpen} page="dashboard">
      <div className="DashboardPage">
        <div className="DashboardPage__header">
          <h3>{`Welcome ${store.user?.firstName}!`}</h3>
          <div className="DashboardPage__application-status">
            APPLICATION STATUS: {store?.application ? store.application.status : 'Not Applied'}
          </div>
          <div className="DashboardPage__body">
            <div className="DashboardPage__schedule">
              <div className="DashboardPage__schedule-header">
                <h3>Announcements</h3>
                <center>Check back often to get the latest updates</center>
              </div>

              <br />
              <div className="DashboardPage__schedule-header">
                <center><h3>We are now accepting applications!</h3></center>
                <div align ="left"> 
                <p>1. An email has been sent to you to verify your email, once verified you can apply to ShellHacks!</p>
                <p>2. Fill out the application</p>
                <p>3. Once your application is completed and you submit your status will become 'Applied'</p>
                <br/>
                <h2>Whats left?</h2>
                <p>Join us on discord and follow us on social media!</p>
                </div>
              </div>
              <br />
              <div className="DashboardPage__schedule-header">
                <center><h3>You have a chance to win AirPods and more!</h3></center> 
                <div align ="left">
                  <p>During our application process we will be giving away prizes! Currently we are giving away a 
                  pair of AirPods to one of our first 100 applicants!</p>
                </div>
              </div>             

            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  )
}

const HOC = props => (
  <ApplicationStore>
    <ApplicationStoreConsumer>
      {store => <DashBoard store={{ ...store, ...props.store }} />}
    </ApplicationStoreConsumer>
  </ApplicationStore>
)
export default () => <AuthPage Component={HOC} />
