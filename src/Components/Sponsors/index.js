import React from 'react'
import './styles.sass'
import FifteenSeventeen from '../../assets/Sponsors/Logo__1517.svg'
import Assurant from '../../assets/Sponsors/Logo__Assurant.svg'
import Balsamiq from '../../assets/Sponsors/Logo__Balsamiq.svg'
import FloridaPanthers from '../../assets/Sponsors/Logo__FloridaPanthers.svg'
import GCP from '../../assets/Sponsors/Logo__GCP.svg'
import Google from '../../assets/Sponsors/Logo__Google.svg'
import Heroku from '../../assets/Sponsors/Logo__Heroku.svg'
import Linode from '../../assets/Sponsors/Logo__Linode.svg'
import StateFarm from '../../assets/Sponsors/Logo__StateFarm.svg'
import Twilio from '../../assets/Sponsors/Logo__Twilio.svg'
import Twitter from '../../assets/Sponsors/Logo__Twitter.svg'
import Wolfram from '../../assets/Sponsors/Logo__WolframAlpha.svg'
import XBOX from '../../assets/Sponsors/Logo__XBOX.svg'
import Rocket from '../../assets/Sponsors/Rocket.svg'

const sponsors = [
  Google,
  Twitter,
  StateFarm,
  Assurant,
  XBOX,
  Balsamiq,
  Linode,
  GCP,
  FloridaPanthers,
  Heroku,
  Twilio,
  Wolfram,
]

const Sponsors = () => {


  return (
    <div className="Sponsors">
      <div className="Sponsors__content">
        <h2 className="Sponsors__title">Sponsors</h2>
        <div className="Sponsors__sponsors">
          {sponsors.map(s => {
            return <div><img src={s} /></div>
          })}
        </div>
      </div>
      <br/>
      <center><h2 className="Sponsors__title">With 💛 from ShellHacks</h2></center>
      <div className="Sponsors__rocket">
        <img src={Rocket} alt="Rocket-building" />
      </div>
    </div>
  )
}

export default Sponsors
