import React, { useState } from 'react'
import history from '../../history'
import _ from 'lodash'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import ApplicationStore from '../../store/ApplicationStore'
import { ApplicationStoreConsumer } from '../../store/ApplicationStore/Context'
import AuthPage from '../../Shells/AuthPage'
import DashboardContainer from '../../Shells/DashboardContainer'

import './styles.sass'

const SchedulePage = () => {
  let workshopColor = '#7870EE'
  let companyColor = '#B83BF6'
  let activityColor = '#3EA5E6'
  let generalColor = '#45108A'
  let eventList = [ // Add events here to reflect them on the schedule.
    //'<b>Check-In</b>\n<em>Discord</em>'
    { title: '<b>Check-In on Discord</b>', date: '2020-09-25', start: '2020-09-25 18:00', end: '2020-09-25 19:00', backgroundColor: generalColor },
    // General
    { title: '<b>Opening Ceremony</b>', date: '2020-09-25', start: '2020-09-25 19:00', end: '2020-09-25 20:00', backgroundColor: generalColor },
    // General
    // Hopin
    { title: '<b>Sponsor Fair</b>', date: '2020-09-25', start: '2020-09-25 20:00', end: '2020-09-25 22:00', backgroundColor: generalColor },
    // General
    // Hopin
    { title: '<b>Team Building</b>\n<em>Activity</em>', date: '2020-09-25', start: '2020-09-25 22:00', end: '2020-09-25 23:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Hacking Begins!</b>', date: '2020-09-25', start: '2020-09-25 22:00', backgroundColor: generalColor},
    
    { title: '<b>Finding Game Assets</b>\n<em>Game Dev Track</em>', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>GitHub Workshop</b>\n<em>Web Dev Track</em>', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00', backgroundColor: workshopColor },
    // Hopin
    // Game Development Track
    { title: '<b>UI / UX Design Fundamentals</b>\n<em>Design Track</em>', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00', backgroundColor: workshopColor },
    // Hopin
    // Design & Project Mgnt Track
    { title: '<b>UI / UX Prototyping - Adobe XD Workshop</b>\n<em>Design Track</em>', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00', backgroundColor: workshopColor },
    // Hopin
    // Design & Project Mgnt Track
    { title: '<b>GitHub Actions Workshop</b>\n<em>IT/Cybersec Track</em>', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Arduino Simulator Workshop</b>\n<em>Hardware Track</em>', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00', backgroundColor: workshopColor },
    // Hopin
    // Hardware Track
    { title: '<b>Python Workshop</b>\n<em>AI Track</em>', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00', backgroundColor: workshopColor },
    // Hopin
    // Artificial Intelligence Track
    { title: '<b>Fusion 360 Workshop</b>\n<em>Hardware Track</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // Hardware Track
    { title: '<b>Pixel Art / Animation</b>\n<em>Game Dev Track</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // Game Development Track
    { title: '<b>HTML/CSS Workshops</b>\n<em>Web Dev Track</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>Azure by Microsoft</b>\n<em>IT/Cybersec Track</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Flutter Workshop</b>\n<em>Mobile Dev Track</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // Mobile Development Track
    { title: '<b>Among Us</b>\n<em>Activity</em>', date: '2020-09-26', start: '2020-09-26 02:00', end: '2020-09-26 03:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Mafia</b>\n<em>Activity</em>', date: '2020-09-26', start: '2020-09-26 03:00', end: '2020-09-26 04:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>JavaScript Workshop</b>\n<em>Web Dev Track</em>', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>Social Engineering Workshop</b>\n<em>IT/Cybersec Track</em>', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Intro to Neural Networks</b>\n<em>AI Track</em>', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00', backgroundColor: workshopColor },
    // Hopin
    // Artificial Intelligence Track
    { title: '<b>Swift Workshop</b>\n<em>Mobile Dev Track</em>', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00', backgroundColor: workshopColor },
    // Hopin
    // Mobile Development Track
    { title: '<b>React Workshop</b>\n<em>Web Dev Track</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>GCP Workshop by GCP </b>\n<em>IT/Cybersec Track</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Unity by Microsoft</b>\n<em>Game Dev Track</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // Game Development Track
    { title: '<b>Neural Machine Translation Workshop</b>\n<em>AI Track</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // Artificial Intelligence Track
    { title: '<b>Android Development Workshop</b>\n<em>Mobile Dev Track</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // Mobile Development Track
    { title: '<b>Node.js Workshop</b>\n<em>Web Dev Track</em>', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>Raspberry Pi by Matrix Labs</b>\n<em>Hardware Track</em>', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00', backgroundColor: workshopColor },
    // Hopin
    // Hardware Track
    { title: '<b>Terraform by State Farm</b>\n<em>IT/Cybersec Track</em>', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Graphic Design Workshop</b>\n<em>Design Track</em>', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00', backgroundColor: workshopColor },
    // Hopin
    // Design & Project Mgnt Track
    { title: '<b>Bob Ross MS Paint</b>\n<em>Activity</em>', date: '2020-09-26', start: '2020-09-26 12:00', end: '2020-09-26 13:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Bloomberg Tech Talk</b>', date: '2020-09-26', start: '2020-09-26 12:00', end: '2020-09-26 13:00', backgroundColor: companyColor },
    // Hopin
    // Company Workshop
    { title: '<b>Intro to AI Chatbot by Twilio</b>\n<em>AI Track</em>', date: '2020-09-26', start: '2020-09-26 13:00', end: '2020-09-26 14:00', backgroundColor: workshopColor },
    // Hopin
    // Artificial Intelligence Track
    { title: '<b>Bloomberg Challenge</b>', date: '2020-09-26', start: '2020-09-26 13:30', end: '2020-09-26 17:00', backgroundColor: companyColor },
    // Hopin
    // Company Workshop
    { title: '<b>1517 Office Hours</b>', date: '2020-09-26', start: '2020-09-26 13:30', end: '2020-09-26 15:00', backgroundColor: companyColor },
    // Hopin
    // Company Workshop
    { title: '<b>Salesforce Research Product Demo</b>', date: '2020-09-26', start: '2020-09-26 14:00', end: '2020-09-26 15:00', backgroundColor: companyColor },
    // Hopin
    // Company Workshop
    { title: '<b>Ace Your Coding Interview! That\'s the Tweet by Twitter</b>', date: '2020-09-26', start: '2020-09-26 15:00', end: '2020-09-26 16:00', backgroundColor: companyColor },
    // Hopin
    // Company Workshop
    { title: '<b>Virtual Escape Room</b>\n<em>Activity</em>', date: '2020-09-26', start: '2020-09-26 16:00', end: '2020-09-26 17:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Scribbl.io</b>\n<em>Activity</em>', date: '2020-09-26', start: '2020-09-26 19:00', end: '2020-09-26 20:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Ladies Storm Hackathons</b>\n<em>Activity</em>', date: '2020-09-26', start: '2020-09-26 20:00', end: '2020-09-26 21:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Slideshow Karaoke</b>\n<em>Activity</em>', date: '2020-09-26', start: '2020-09-26 22:00', end: '2020-09-26 23:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Among Us</b>\n<em>Activity</em>', date: '2020-09-26', start: '2020-09-26 24:00', end: '2020-09-27 01:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Hacking Ends</b>', date: '2020-09-27', start: '2020-09-27 10:00', backgroundColor: generalColor},
    // General
    { title: '<b>Project Submissions</b>\n<em>Devpost</em>', date: '2020-09-27', start: '2020-09-27 10:00', end: '2020-09-27 12:00', backgroundColor: generalColor },
    // General
    // Devpost
    { title: '<b>Jackbox</b>\n<em>Activity</em>', date: '2020-09-27', start: '2020-09-27 12:00', end: '2020-09-27 13:30', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Project Judging</b>', date: '2020-09-27', start: '2020-09-27 12:00', end: '2020-09-25 14:00', backgroundColor: generalColor },
    // General
    { title: '<b>Closing Ceremony</b>', date: '2020-09-27', start: '2020-09-27 14:00', backgroundColor: generalColor},
    // Hopin
    // General
  ]
  return (
    <div className="SchedulePage">
      {/*<div className="ApplicationPage__funnel">
            <img src={Funnel} alt ="Funnel SVG"/> <-- Throw an image in here, if you want the page to have an image.
      </div>*/}
      <br /><br />
      <div className="SchedulePage__schedule">
        <div className="SchedulePage__header">
          <p className="SchedulePage__title">Schedule (EDT)</p>
        </div>
        <div className="SchedulePage__fullCalendar">
        <FullCalendar
            plugins={[timeGridPlugin]}
            initialView="timeGridTwoDay"
            views={{
              timeGridTwoDay: {
                type: 'timeGrid',            
                validRange: {
                  start: '2020-09-25',
                  end: '2020-09-28'
                },
                duration: {days: 3}
              }
            }}
            dragScroll={true}
            allDaySlot={false}
            nowIndicator={true}
            slotDuration={'00:15:00'}
            height="80vh"
            slotEventOverlap={false}
            //eventColor='#8964F0' //<-- Use this to change the color of all events
            events={eventList}
            eventContent= {function(arg) {
              return {
                html: arg.event.title.replace(/\n/g, '<br>').replace(/<b>/g, '<b>').replace(/<\\\/b>/g, '</b>').replace(/<em>/g, '<em>').replace(/<\\\/em>/g, '<\em>')
              }
            }}
          />
        </div>
      </div>
      <div className="SchedulePage__footer"></div>
    </div>
  )
}

// inject store into page
const HOC = props => (
  <ApplicationStore>
    <ApplicationStoreConsumer>
      {store => <SchedulePage store={{ ...store, ...props.store }} />}
    </ApplicationStoreConsumer>
  </ApplicationStore>
)

export default () => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <DashboardContainer isOpen={isOpen} setIsOpen={setisOpen} page="schedule">
      <AuthPage Component={HOC} />
    </DashboardContainer>
  )
}
