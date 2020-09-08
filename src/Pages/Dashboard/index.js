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
          <h4>{store?.application?.status == 'ACCEPTED' ? 'Make sure to confirm your attendance! Check your application to confirm.' : ''}</h4>
          <div className="DashboardPage__application-status">
            Application Status: {store?.application ? store.application.status : 'Not Applied'}
          </div>
          <div className="DashboardPage__body">
            <div className="DashboardPage__schedule">
                <h3>Announcements</h3>
                <center>Check back often to get the latest ShellHacks updates!</center>

                <br/>
                <div className="DashboardPage__schedule-header">
              <div align ="left"><h4> 🎉&nbsp;&nbsp;Congratulations to our $100 Amazon Gift Card winner!</h4>
                <br/>
                  <p>Taylor Rivera wins a $100 Amazon gift card! We'll be reaching out to you with the details 💰</p></div>
                    <div align ="right">September 3, 2020</div>
              </div> 

                <br/>
                <div className="DashboardPage__schedule-header">
                <div align ="left"><h4> 💸&nbsp;&nbsp;Giveaway #3: &nbsp;Win $100 Amazon Gift Card!</h4>
                <br/>
                  <p>We're giving away a $100 Amazon gift card to one lucky winner! Head to our Instagram page and 
                    follow the steps in this <a href="https://www.instagram.com/p/CD4mgefAJvf/"><u>post</u></a> for a chance to win.⁠</p>
                    <div align ="right">August 19, 2020</div>
                  </div> 
                </div>

              <br/>
                <div className="DashboardPage__schedule-header">
              <div align ="left"><h4> 🎉&nbsp;&nbsp;Congratulations to our Nintendo Switch winner!</h4>
                <br/>
                  <p>Antonella Avogadro wins a Nintendo Switch with Animal Crossing for being among our second wave of students to register! 
                    We'll be reaching out to you with the details 👾</p></div>
                    <div align ="right">August 5, 2020</div>
              </div> 

              <br/>
              <div className="DashboardPage__schedule-header">
              <div align ="left"><h4> 🎮&nbsp;&nbsp;Giveaway #2: &nbsp;Win a Nintendo Switch with Animal Crossing!</h4>
                <br/>
                  <p>Fill out your application by Friday, July 24 and you'll automatically be entered 
                    to win a Nintendo Switch with Animal Crossing! Be the next Steven Wang!</p></div>
                    <div align ="right">July 21, 2020</div>
              </div> 

              <br/>
                <div className="DashboardPage__schedule-header">
              <div align ="left"><h4> 🎉&nbsp;&nbsp;Congratulations to our AirPods winner!</h4>
                <br/>
                  <p>Steven Wang is our lucky AirPods winner! We'll be reaching out to you with the details 📦</p></div>
                    <div align ="right">July 21, 2020</div>
              </div> 

              <br />
              <div className="DashboardPage__schedule-header">
                <div align ="left"><h4>✏️ &nbsp;&nbsp;Applications are now open!</h4>
                <br/>
                <p>Ready to apply? Make sure you have verified your email address and then proceed to fill out our application.
                  After submitting, your application status will change to "Applied." We'll be reviewing your application in the 
                  coming weeks and sending acceptances in waves once applications close!
                </p></div>
                    <div align ="right">July 13, 2020</div>
              </div>

              <br />
              <div className="DashboardPage__schedule-header">
              <div align ="left"><h4> 😱&nbsp;&nbsp;Giveaway #1: &nbsp;Win a pair of AirPods!</h4>
                <br/>
                  <p>Be one of the first 100 students to submit your application 
                    and enter for a chance to win a pair of AirPods!</p>
                    </div>
                    <div align ="right">July 13, 2020</div>
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
                    <div align ="right">July 13, 2020</div>
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
                    <div align ="right">July 13, 2020</div>
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
