import React from 'react'
import './styles.sass'
import discordLogo from '../../assets/social-media/discord.svg'
import faceBookLogo from '../../assets/social-media/facebook.svg'
import instagramLogo from '../../assets/social-media/instagram.svg'
import twitterLogo from '../../assets/social-media/twitter.svg'
import linkedinLogo from '../../assets/social-media/linkedin.svg'
import ShellHacksLogo from '../../assets/branding/ShellHacks-title.svg'
import futuristicBuilding from '../../assets/branding/smart-city.svg'

const HomePageHero = props => {
  const logout = () => {
    props.logout()
    window.location.reload()
  }
  return (
    <div className="HomePageHero">
      <div className="HomePageHero__header">
        <div className="header-inner">
          <div className="header-content">
            <a href="/">
              <img className="title" src={ShellHacksLogo} alt="shellhacks" />
            </a>
            <div className="sub-title">
              <h4>Florida's Largest Hackathon</h4>
              <p>
                September 25 - 27th, 2020 &nbsp;&nbsp;| &nbsp;&nbsp; Virtual Event<br />
                 
              </p>
              <div className="city mobile">
                <img src={futuristicBuilding} alt="futuristic-building" />
              </div>
              {props.user ? (
                <a href="/dashboard" role="button" className="pre-register-btn">
                  Dashboard
                </a>
              ) : (
                <a role="button" className="pre-register-btn">
                  Registrations Closed
                </a>
              )}
              <div className="button-container">
                <a
                  className="sponsor-btn"
                  href="mailto:upe@fiu.edu?Subject=Shellhacks%202020%20sponsor%20inquiry"
                  target="_top"
                >
                  Sponsor
                </a>

                {<a
                  className="mentor-btn"
                  href="http://go.fiu.edu/shellmentor"
                  target="_top"
                >
                  Mentor
                </a> }

                {props.user ? (
                  <button role="button" className="old-site-btn" onClick={logout}>
                    Logout
                  </button>
                ) : (
                  <a href="/login" role="button" className="old-site-btn">
                    Login
                  </a>
                )}
              </div>
              <div className="social-media-container">
                <a href="http://discord.gg/upefiu" rel="_blank">
                  <img src={discordLogo} alt="discord-logo" />
                </a>
                <a href="https://www.facebook.com/upefiu/" rel="_blank">
                  <img src={faceBookLogo} alt="facebook-logo" />
                </a>
                <a href="https://www.instagram.com/upefiu/" rel="_blank">
                  <img src={instagramLogo} alt="instagram-logo" />
                </a>
                <a href="https://twitter.com/upefiu" rel="_blank">
                  <img src={twitterLogo} alt="twitter-logo" />
                </a>
                <a href="https://www.linkedin.com/company/28673457" rel="_blank">
                  <img src={linkedinLogo} alt="linkedin-logo" />
                </a>
              </div>
              <div>
                <a href="http://mlh.io/code-of-conduct/">MLH Code of Conduct</a>
              </div>
            </div>
          </div>
          <div className="city">
            <img src={futuristicBuilding} alt="futuristic-building" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageHero
