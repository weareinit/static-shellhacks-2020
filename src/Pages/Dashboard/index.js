import React, { useState } from 'react'
import AuthPage from '../../Shells/AuthPage'
import DashboardContainer from '../../Shells/DashboardContainer'
import ApplicationStore from '../../store/ApplicationStore/'
import { ApplicationStoreConsumer } from '../../store/ApplicationStore/Context'
import Robot from "../../assets/branding/Robot.svg"
import './styles.sass'

const DashBoard = ({ store }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <DashboardContainer isOpen={isOpen} setIsOpen={setIsOpen} page="dashboard">
      <div className="DashboardPage__robot">
        <img src={Robot} alt ="Robot SVG"/>
      </div>
      <br/>
      <div className="DashboardPage">
        <div className="DashboardPage__header">
          <h3>{`Welcome ${store.user?.firstName}!`}</h3>
          <div className="DashboardPage__application-status">
            Application Status: {store?.application ? store.application.status : 'Not Applied'}
          </div>
          <div className="DashboardPage__body">
            <div className="DashboardPage__schedule">
                <h3>Announcements</h3>
                <center>Check back often to get the latest ShellHacks updates!</center>

              <br />
              <div className="DashboardPage__schedule-header">
                <div align ="left"><h4>✏️ &nbsp;&nbsp;Applications are now open!</h4>
                <br/>
                <p>Ready to apply? Make sure you have verified your email address and then proceed to fill out our application.
                  After submitting, your application status will change to "Applied." We'll be reviewing your application in the 
                  coming weeks and sending acceptances in waves once applications close!
                </p>
                </div>
              </div>

              <br />
              <div className="DashboardPage__schedule-header">
              <div align ="left"><h4> 😱&nbsp;&nbsp;Win a pair of AirPods!</h4>
                <br/>
                  <p>Be one of the first 100 students to submit your application 
                    and enter for a chance to win a pair of AirPods!</p>
                </div>
              </div> 
              <br/>

              <div className="DashboardPage__schedule-header">
              <div align ="left"><h4> 🌴&nbsp;&nbsp;Join our community on Discord!</h4>
                <br/>
                  <p>Discord is our official communication platform for ShellHacks, 
                    so be sure to sign up for it as soon as you can! On Discord you can 
                    chat with fellow attendees, discuss project ideas, find team members, 
                    and more. You can also contact the event organizers and ask us any questions you have!
                    Join Discord <a href="https://discord.com/invite/upefiu"><u>here</u></a>!</p>
                </div>
              </div> 
              <br/>

              <div className="DashboardPage__schedule-header">
              <div align ="left"><h4>📸&nbsp;&nbsp;Follow us on Instagram!</h4>
                <br/>
                  <p>Let the world know how excited you are for ShellHacks! 
                    Follow us on Instagram and make a post or story tagging <b>@upefiu </b>
                    using the hashtag <b>#ShellHacks</b>. We're running social media contests 
                    all summer long and giving away lots of cool prizes to the best posts! 
                    Follow our Instagram <a href="https://www.instagram.com/upefiu/"><u>here</u></a>!</p>
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
