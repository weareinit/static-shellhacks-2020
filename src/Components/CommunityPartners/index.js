import React from 'react'
import './styles.sass'
import SHPE from '../../assets/Sponsors/Logo__SHPE.svg'
import eMerge from '../../assets/Sponsors/Logo__eMerge.svg'
import Rocket from '../../assets/Sponsors/Rocket.svg'


const sponsors = [
  eMerge,
  SHPE,
]

const CommunityPartners = () => {


  return (
    <div className="Sponsors">
      <div className="Sponsors__content">
        <h2 className="Sponsors__title">Community Partners</h2>
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
      <br/>
      <center><h2 className="Sponsors__title">With 💛 from ShellHacks</h2></center>
      <div className="Sponsors__rocket">
        <img src={Rocket} alt="Rocket-building" />
      </div>
    </div>
  )
}

export default CommunityPartners
