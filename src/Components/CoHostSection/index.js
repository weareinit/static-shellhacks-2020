import React from 'react'
import "./styles.sass"
import Logo from '../../assets/Sponsors/Logo__JPMC.svg'


const CoHostSection = props => {
  return (
    <div className="HostSection">
      <div className="HostSection__imgContainer">
        <a href="https://www.jpmorganchase.com"> <img className="HostSection__img" src={Logo} alt ="About SVG"/></a>
      </div>
      <div className="HostSection__content">
      <h2 className="HostSection__title">Co-Hosted By</h2>
        <p className="HostSection__info">
        
        JPMorgan Chase & Co. is a leading global financial services firm with assets of $2.5 trillion and operations worldwide. 
        With 50,000 technologists and a $10+ billion investment, technology drives every aspect of their business. 
        Their teams build innovative solutions that impact millions of customers and businesses worldwide.
        </p>
      </div>
    </div>
  )
}

export default CoHostSection 