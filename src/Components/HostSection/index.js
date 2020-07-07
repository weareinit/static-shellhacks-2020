import React from 'react'
import "./styles.sass"
import Logo from '../../assets/branding/UPE_logo.svg'


const HostSection = props => {
  return (
    <div className="HostSection">
      <div className="HostSection__imgContainer">
        <a href="https://upe.cs.fiu.edu"> <img className="HostSection__img" src={Logo} alt ="About SVG"/></a>
      </div>
      <div className="HostSection__content">
      <h2 className="HostSection__title">Hosted By</h2>
        <p className="HostSection__info">
        Upsilon Pi Epsilon (UPE) is the largest student organization for technology at Florida International University (FIU). Our mission is to provide students with opportunities to develop technically and professionally. We welcome students of all academic backgrounds and skill levels who are interested in technology.
        </p>
      </div>
    </div>
  )
}

export default HostSection