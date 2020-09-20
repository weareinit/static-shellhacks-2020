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
  let workshopColor = '#1D7D70'
  let companyColor = '#DD8ABD'
  let activityColor = '#1097DD'
  let generalColor = '#AAAAAA'
  let eventList = [ // Add events here to reflect them on the schedule.
    { title: '<b>Check-In</b>\n<em>Discord</em>', date: '2020-09-25', start: '2020-09-25 18:00', end: '2020-09-25 19:00', backgroundColor: generalColor },
    // General
    { title: '<b>Opening Ceremony</b>\n<em>Hopin</em>', date: '2020-09-25', start: '2020-09-25 19:00', end: '2020-09-25 20:00', backgroundColor: generalColor },
    // General
    // Hopin
    { title: '<b>Sponsor Fair</b>\n<em>Hopin</em>', date: '2020-09-25', start: '2020-09-25 20:00', end: '2020-09-25 22:00', backgroundColor: generalColor },
    // General
    // Hopin
    { title: '<b>Hacking Begins!</b>', date: '2020-09-25', start: '2020-09-25 22:00', backgroundColor: generalColor},
    { title: '<b>Team Building</b>\n<em>Zoom</em>', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>GitHub Workshop</b>\nWeb Dev Track\n<em>Hopin</em>', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>Finding Game Assets</b>\nGame Dev Track\n<em>Hopin</em>', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00', backgroundColor: workshopColor },
    // Hopin
    // Game Development Track
    { title: '<b>UI / UX Design Fundamentals</b>\nDesign Track\n<em>Hopin</em>', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00', backgroundColor: workshopColor },
    // Hopin
    // Design & Project Mgnt Track
    { title: '<b>UI / UX Prototyping with Adobe XD Workshop</b>\nDesign Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00', backgroundColor: workshopColor },
    // Hopin
    // Design & Project Mgnt Track
    { title: '<b>GitHub Actions Workshop</b>\nIT/Cybersec Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Arduino Simulator Workshop</b>\nHardware Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00', backgroundColor: workshopColor },
    // Hopin
    // Hardware Track
    { title: '<b>Python Workshop</b>\nAI Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00', backgroundColor: workshopColor },
    // Hopin
    // Artificial Intelligence Track
    { title: '<b>Pixel Art / Animation</b>\nGame Dev Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // Game Development Track
    { title: '<b>HTML/CSS Workshops</b>\nWeb Dev Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>Azure by Microsoft</b>\nIT/Cybersec Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Fusion 360 Workshop</b>\nHardware Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // Hardware Track
    { title: '<b>Flutter Workshop</b>\nMobile Dev Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00', backgroundColor: workshopColor },
    // Hopin
    // Mobile Development Track
    { title: '<b>Among Us</b>\n<em>Zoom</em>', date: '2020-09-26', start: '2020-09-26 02:00', end: '2020-09-26 03:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Mafia</b>\n<em>Zoom</em>', date: '2020-09-26', start: '2020-09-26 03:00', end: '2020-09-26 04:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>JavaScript Workshop</b>\nWeb Dev Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>Social Engineering Workshop</b>\nIT/Cybersec Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Intro to Neural Networks</b>\nAI Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00', backgroundColor: workshopColor },
    // Hopin
    // Artificial Intelligence Track
    { title: '<b>Swift Workshop</b>\nMobile Dev Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00', backgroundColor: workshopColor },
    // Hopin
    // Mobile Development Track
    { title: '<b>React Workshop</b>\nWeb Dev Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>GCP by GCP Workshop</b>\nIT/Cybersec Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Unity Workshop by Microsoft</b>\nGame Dev Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // Game Development Track
    { title: '<b>Neural Machine Translation Workshop</b>\nAI Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // Artificial Intelligence Track
    { title: '<b>Android Development Workshop</b>\nMobile Dev Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00', backgroundColor: workshopColor },
    // Hopin
    // Mobile Development Track
    { title: '<b>Node.js Workshop</b>\nWeb Dev Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00', backgroundColor: workshopColor },
    // Hopin
    // Web Development Track
    { title: '<b>Raspberry Pi by Matrix Labs</b>\nHardware Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00', backgroundColor: workshopColor },
    // Hopin
    // Hardware Track
    { title: '<b>Terraform Workshop by State Farm</b>\nIT/Cybersec Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00', backgroundColor: workshopColor },
    // Hopin
    // IT & Cybersecurity Track
    { title: '<b>Graphic Design Workshop</b>\nDesign Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00', backgroundColor: workshopColor },
    // Hopin
    // Design & Project Mgnt Track
    { title: '<b>Bob Ross MS Paint</b>\n<em>Zoom</em>', date: '2020-09-26', start: '2020-09-26 12:00', end: '2020-09-26 13:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Bloomberg Tech Talk</b>\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 12:00', end: '2020-09-26 13:00', backgroundColor: companyColor },
    // Hopin
    // Company Workshop
    { title: '<b>Intro to AI Chatbot by Twilio</b>\nAI Track\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 13:00', end: '2020-09-26 14:00', backgroundColor: workshopColor },
    // Hopin
    // Artificial Intelligence Track
    { title: '<b>Bloomberg Tech Talk</b>\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 13:30', end: '2020-09-26 17:00', backgroundColor: companyColor },
    // Hopin
    // Company Workshop
    { title: '<b>Salesforce Research Product Demo</b>\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 14:00', end: '2020-09-26 15:00', backgroundColor: companyColor },
    // Hopin
    // Company Workshop
    { title: '<b>Ace Your Coding Interview! That\'s the Tweet by Twitter</b>\n<em>Hopin</em>', date: '2020-09-26', start: '2020-09-26 15:00', end: '2020-09-26 16:00', backgroundColor: companyColor },
    // Hopin
    // Company Workshop
    { title: '<b>Virtual Escape Room</b>\n<em>Zoom</em>', date: '2020-09-26', start: '2020-09-26 16:00', end: '2020-09-26 17:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Scribbl.io</b>\n<em>Zoom</em>', date: '2020-09-26', start: '2020-09-26 19:00', end: '2020-09-26 20:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Women Storm Hackathons</b>\n<em>Zoom</em>', date: '2020-09-26', start: '2020-09-26 20:00', end: '2020-09-26 21:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Slideshow Karaoke</b>\n<em>Zoom</em>', date: '2020-09-26', start: '2020-09-26 21:00', end: '2020-09-26 22:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Among Us</b>\n<em>Zoom</em>', date: '2020-09-26', start: '2020-09-26 24:00', end: '2020-09-27 01:00', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Hacking Ends</b>', date: '2020-09-27', start: '2020-09-27 10:00', backgroundColor: generalColor},
    // General
    { title: '<b>Project Submissions</b>\n<em>Devpost</em>', date: '2020-09-27', start: '2020-09-27 10:00', end: '2020-09-27 12:00', backgroundColor: generalColor },
    // General
    // Devpost
    { title: '<b>Jackbox</b>\n<em>Zoom</em>', date: '2020-09-27', start: '2020-09-27 12:00', end: '2020-09-27 13:30', backgroundColor: activityColor },
    // Zoom
    // Activity
    { title: '<b>Project Judging</b>', date: '2020-09-27', start: '2020-09-27 12:00', end: '2020-09-25 14:00', backgroundColor: generalColor },
    // General
    { title: '<b>Closing Ceremony</b>\n<em>Hopin</em>', date: '2020-09-27', start: '2020-09-27 14:00', backgroundColor: generalColor},
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
          <p className="SchedulePage__title">Schedule</p>
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
