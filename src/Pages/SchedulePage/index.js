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
  let eventList = [ // Add events here to reflect them on the schedule.
    { title: 'Check-In on Discord', date: '2020-09-25', start: '2020-09-25 18:00', end: '2020-09-25 19:00' },
    // General
    { title: 'Opening Ceremony', date: '2020-09-25', start: '2020-09-25 19:00', end: '2020-09-25 20:00' },
    // General
    // Hopin
    { title: 'Sponsor Fair', date: '2020-09-25', start: '2020-09-25 20:00', end: '2020-09-25 22:00' },
    // General
    // Hopin
    { title: 'Hacking Begins!!', date: '2020-09-25', start: '2020-09-25 22:00'},
    { title: 'Team Building', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00' },
    // Zoom
    // Activity

    { title: 'GitHub Workshop', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00' },
    // Hopin
    // Web Development Track
    { title: 'Finding Game Assets Workshop', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00' },
    // Hopin
    // Game Development Track
    { title: 'UI / UX Design Fundamentals Workshop', date: '2020-09-25', start: '2020-09-25 23:00', end: '2020-09-25 24:00' },
    // Hopin
    // Design & Project Mgnt Track

    { title: 'UI / UX Prototyping with Adobe XD Workshop', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00' },
    // Hopin
    // Design & Project Mgnt Track
    { title: 'GitHub Actions Workshop', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00'  },
    // Hopin
    // IT & Cybersecurity Track
    { title: 'Arduino Simulator Workshop', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00'  },
    // Hopin
    // Hardware Track
    { title: 'Python Workshop', date: '2020-09-26', start: '2020-09-26 00:00', end: '2020-09-26 01:00'  },
    // Hopin
    // Artificial Intelligence Track

    { title: 'Pixel Art / Animation Workshop', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 01:30'  },
    // Hopin
    // Game Development Track
    { title: 'HTML/CSS Workshops', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00'  },
    // Hopin
    // Game Development Track
    { title: 'Azure Workshop by Microsoft', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00'  },
    // Hopin
    // IT & Cybersecurity Track
    { title: 'Fusion 360 Workshop', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00'  },
    // Hopin
    // Hardware Track
    { title: 'Flutter Workshop', date: '2020-09-26', start: '2020-09-26 01:00', end: '2020-09-26 02:00'  },
    // Hopin
    // Mobile Development Track

    { title: 'Among Us', date: '2020-09-26', start: '2020-09-26 02:00', end: '2020-09-26 03:00' },
    // Zoom
    // Activity

    { title: 'Mafia', date: '2020-09-26', start: '2020-09-26 03:00', end: '2020-09-26 04:00' },
    // Zoom
    // Activity

    { title: 'JavaScript Workshop', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00'},
    // Hopin
    // Web Development Track
    { title: 'Social Engineering Workshops', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00' },
    // Hopin
    // IT & Cybersecurity Track
    { title: 'Intro to Neural Networks', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00' },
    // Hopin
    // Artificial Intelligence Track
    { title: 'Swift Workshop', date: '2020-09-26', start: '2020-09-26 09:00', end: '2020-09-26 10:00' },
    // Hopin
    // Mobile Development Track

    { title: 'React Workshop', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00' },
    // Hopin
    // Web Development Track
    { title: 'GCP by GCP Workshop', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00' },
    // Hopin
    // IT & Cybersecurity Track
    { title: 'Unity Workshop by Microsoft', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00' },
    // Hopin
    // Game Development Track
    { title: 'Neural Machine Translation Workshop', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00' },
    // Hopin
    // Artificial Intelligence Track
    { title: 'Android Development Workshop', date: '2020-09-26', start: '2020-09-26 10:00', end: '2020-09-26 11:00' },
    // Hopin
    // Mobile Development Track

    { title: 'Node Workshop', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00' },
    // Hopin
    // Web Development Track
    { title: 'Raspberry Pi by Matrix Labs', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00' },
    // Hopin
    // Hardware Track
    { title: 'Terraform Workshop by State Farm', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00' },
    // Hopin
    // IT & Cybersecurity Track
    { title: 'Graphic Design Workshop', date: '2020-09-26', start: '2020-09-26 11:00', end: '2020-09-26 12:00' },
    // Hopin
    // Design & Project Mgnt Track

    { title: 'Bob Ross MS Paint', date: '2020-09-26', start: '2020-09-26 12:00', end: '2020-09-26 13:00' },
    // Zoom
    // Activity
    { title: 'Bloomberg Tech Talk', date: '2020-09-26', start: '2020-09-26 12:00', end: '2020-09-26 13:00' },
    // Hopin
    // Company Workshop

    { title: 'Intro to AI Chatbot by Twillio', date: '2020-09-26', start: '2020-09-26 13:00', end: '2020-09-26 14:00' },
    // Hopin
    // Artificial Intelligence Track
    { title: 'Bloomberg Tech Talk', date: '2020-09-26', start: '2020-09-26 13:30', end: '2020-09-26 17:00' },
    // Hopin
    // Company Workshop

    { title: 'Salesforce Research Product Demo', date: '2020-09-26', start: '2020-09-26 14:00', end: '2020-09-26 15:00' },
    // Hopin
    // Company Workshop

    { title: 'Ace Your Coding Interview! Thats the Tweet by Twitter', date: '2020-09-26', start: '2020-09-26 15:00', end: '2020-09-26 16:00' },
    // Hopin
    // Company Workshop

    { title: 'Virtual Escape Room', date: '2020-09-26', start: '2020-09-26 16:00', end: '2020-09-26 17:00' },
    // Zoom
    // Activity

    { title: 'Scribbl.io', date: '2020-09-26', start: '2020-09-26 19:00', end: '2020-09-26 20:00' },
    // Zoom
    // Activity

    { title: 'Women Storm Hackathons', date: '2020-09-26', start: '2020-09-26 20:00', end: '2020-09-26 21:00' },
    // Zoom
    // Activity

    { title: 'Slideshow Karaoke', date: '2020-09-26', start: '2020-09-26 21:00', end: '2020-09-26 22:00' },
    // Zoom
    // Activity

    { title: 'Among Us', date: '2020-09-26', start: '2020-09-26 24:00', end: '2020-09-27 01:00' },
    // Zoom
    // Activity

    { title: 'Hacking Ends', date: '2020-09-27', start: '2020-09-27 10:00'},
    // General

    { title: 'Project Submissions', date: '2020-09-27', start: '2020-09-27 10:00', end: '2020-09-27 12:00' },
    // General
    // Devpost

    { title: 'Jackbox', date: '2020-09-27', start: '2020-09-27 12:00', end: '2020-09-27 13:30' },
    // Zoom
    // Activity
    { title: 'Project Judging', date: '2020-09-27', start: '2020-09-27 12:00', end: '2020-09-25 14:00' },
    // General
    

    { title: 'Closing Ceremony', date: '2020-09-27', start: '2020-09-27 14:00'},
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
            initialView="timeGrid"
            dragScroll={true}
            allDaySlot={false}
            nowIndicator={true}
            height="80vh"
            //eventColor='#8964F0' //<-- Use this to change the color of all events
            visibleRange={{
              start: '2020-09-25',
              end: '2020-09-28'
            }}
            events={eventList}
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
