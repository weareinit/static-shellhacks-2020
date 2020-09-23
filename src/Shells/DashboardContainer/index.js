import React, { Component } from 'react'
import history from '../../history'
import AuhStore from '../../store/AuthStore'
import { AuthStoreConsumer } from '../../store/AuthStore/Context'
import cx from 'classnames'
import './styles.sass'
import discordLogo from '../../assets/social-media/discord.svg'
import faceBookLogo from '../../assets/social-media/facebook.svg'
import instagramLogo from '../../assets/social-media/instagram.svg'
import twitterLogo from '../../assets/social-media/twitter.svg'
import linkedinLogo from '../../assets/social-media/linkedin.svg'

class DashboardContainer extends Component {
  menuItemClasses = page => {
    return cx('DashboardContainer__menu-items', {
      highlighted: this.props.page === page
    })
  }

  logout = () => {
    this.props.store.logout()
    history.push('/')
    window.location.reload()
  }

  render() {
    return (
      <div className="DashboardContainer">
        {this.props.isOpen ? (
          <div className="DashboardContainer__menu">
            <ul className="DashboardContainer__items">
              <a href="/">
                <li className={this.menuItemClasses('home')}>Home</li>
              </a>
              <a href="/dashboard">
                <li className={this.menuItemClasses('dashboard')}>Dashboard</li>
              </a>
              <a href="/application">
                <li className={this.menuItemClasses('application')}>Application</li>
              </a>
              {
              (this.props.application?.status == "CONFIRMED!") 
                ? <a href="http://go.fiu.edu/shellhacksguide" target="_blank" rel="noopener noreferrer"><li className={this.menuItemClasses('guide')}>
                Guide</li></a>
                : ''
              }
              {
              (this.props.application?.status == "CONFIRMED!") 
                ? <a href="http://go.fiu.edu/shellhacksschedule" target="_blank" rel="noopener noreferrer"><li className={this.menuItemClasses('guide')}>
                Schedule</li></a>
                : ''
              }
              <a href="/">
                <li className={this.menuItemClasses('logout')} onClick={this.logout}>
                  Logout
                </li>
              </a>
            </ul>
            <div className="DashboardContainer__social-media-container">
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
            <div className="DashboardContainer__close-menu-btn">
              <button onClick={() => this.props.setIsOpen(false)}>x</button>
            </div>
            {/* <div className="DashboardContainer__logout-btn">
              <button onClick={this.logout}>Logout</button>
            </div> */}
          </div>
        ) : (
          <button
            onClick={() => this.props.setIsOpen(true)}
            className="DashboardContainer__menu-btn"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        )}
        <div className="DashboardContainer__body">{this.props.children}</div>
      </div>
    )
  }
}

const HOC = props => (
  <AuhStore>
    <AuthStoreConsumer>
      {store => <DashboardContainer {...props} store={store} />}
    </AuthStoreConsumer>
  </AuhStore>
)

export default HOC
