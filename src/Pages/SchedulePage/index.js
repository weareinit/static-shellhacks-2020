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
    { title: 'Awesomeness workshop', date: '2020-09-19', start: '2020-09-25 14:00', end: '2020-09-25 17:00' },
    { title: 'Worshipping Cesar', date: '2020-09-19', start: '2020-09-25 15:00', end: '2020-09-25 18:00' },
    { title: 'How I learned to love pizza and bagels', date: '2020-09-25', start: '2020-09-25 15:00', end: '2020-09-25 18:00' },
    { title: 'Marketing w/ Shanna', date: '2020-09-19', start: '2020-09-25 15:00', end: '2020-09-25 18:00' },
    { title: 'Tanking 101 w/ Kevin', date: '2020-09-19', start: '2020-09-25 15:00', end: '2020-09-25 18:00' }
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
            // eventColor='#8964F0' <-- Use this to change the color of all events
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
