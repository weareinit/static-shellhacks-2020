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
import JetBrains from '../../assets/Sponsors/Logo__Jetbrains.svg'
import MLH from '../../assets/Sponsors/Logo__MLH.svg'
import DigitalOcean from '../../assets/Sponsors/Logo__DigitalOcean.svg'
import OOP from '../../assets/Sponsors/Logo__OOP.svg'
import Autonation from '../../assets/Sponsors/Logo__Autonation.svg'
import Replit from '../../assets/Sponsors/Logo__Replit.svg'
import Ripplematch from '../../assets/Sponsors/Logo__Ripplematch.svg'
import SCIS from '../../assets/Sponsors/Logo__SCIS.svg'
import GEApp from '../../assets/Sponsors/Logo__GEAppliances.svg'
import Lyft from '../../assets/Sponsors/Logo__Lyft.svg'
import Salesforce from '../../assets/Sponsors/Logo__Salesforce.svg'
import Microsoft from '../../assets/Sponsors/Logo__Microsoft.svg'
import Bloomberg from '../../assets/Sponsors/Logo__Bloomberg.svg'
import Pinterest from '../../assets/Sponsors/Logo__Pinterest.svg'
import Codepath from '../../assets/Sponsors/Logo__CodePath.svg'
import Chevron from '../../assets/Sponsors/Logo__Chevron.svg'
import GoldmanSachs from '../../assets/Sponsors/Logo__GoldmanSachs.svg'
import MatrixLabs from '../../assets/Sponsors/Logo__MatrixLabs.svg'
import RoyalCarribean from '../../assets/Sponsors/Logo__RoyalCarribean.svg'
import Deloitte from '../../assets/Sponsors/Logo__Deloitte.svg'
import CEC from '../../assets/Sponsors/Logo__CEC.svg'
import FCA from '../../assets/Sponsors/Logo__FCA.svg'
import Facebook from '../../assets/Sponsors/Logo__Facebook.svg'
import CapitalOne from '../../assets/Sponsors/Logo__CapitalOne.svg'
import Robinhood from '../../assets/Sponsors/Logo__RobinHood.svg'
import Adobe from '../../assets/Sponsors/Logo__Adobe.svg'
import EA from '../../assets/Sponsors/Logo__EA.svg'
import Nike from '../../assets/Sponsors/Logo__Nike.svg'
import EchoAR from '../../assets/Sponsors/Logo__EchoAR.svg'
import Addigy from '../../assets/Sponsors/Logo__Addigy.svg'
import Mitre from '../../assets/Sponsors/Logo__Mitre.svg'

const sponsors = [
  Microsoft,
  XBOX,
  Google,
  Twitter,
  Adobe,
  StateFarm,
  GEApp,
  Assurant,
  Autonation,
  FCA,
  Salesforce,
  Bloomberg,
  GoldmanSachs,
  Robinhood,
  Facebook,
  CapitalOne,
  Nike,
  Pinterest,
  Balsamiq,
  Linode,
  Addigy,
  Lyft,
  Deloitte,
  RoyalCarribean,
  Chevron,
  EA,
  Mitre,
  OOP,
  FifteenSeventeen,
  Ripplematch,
  GCP,
  Replit,
  MatrixLabs,
  FloridaPanthers,
  Heroku,
  Twilio,
  DigitalOcean,
  EchoAR,
  Codepath,
  Wolfram,
  JetBrains,
  CEC,
  SCIS,
  MLH,
]

const Sponsors = () => {


  return (
    <div className="Sponsors">
      <div className="Sponsors__content">
        <h2 className="Sponsors__title">Sponsored By</h2>
        <div className="Sponsors__sponsors">
          {sponsors.map(s => {
            return <div><img src={s} /></div>
          })}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  )
}

export default Sponsors
