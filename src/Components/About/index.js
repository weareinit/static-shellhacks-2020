import React from 'react'
import "./styles.sass"
import About from '../../assets/branding/About.svg'
import relaxEmoji from '../../assets/emojis/1f5bc.svg'
import learnEmoji from '../../assets/emojis/1f4dd.svg'
//import treatEmoji from '../../assets/emojis/1f379.svg'


const AboutSection = props => {
  return (
    <div className="AboutSection">
      <div className="AboutSection__imgContainer">
        <img className="AboutSection__img" src={About} alt ="About SVG"/>
      </div>
      <div className="AboutSection__content">
        <h2 className="AboutSection__title">Enter A New Dimension!</h2>
        <p className="AboutSection__info">
            Ready for a weekend full of learning, innovation and fun? Come join us at ShellHacks, Florida's Largest Hackathon! Explore our tech city through our various workshops, fun activities, networking opportunites and more. Create innovative projects and meet students from across the nations as we showcase the various technologies used in the industry!
        </p>
        <div className="AboutSection__details">
          <ul className="AboutSection__list">
            <li className="AboutSection__detail">
              <i className="AboutSection__icon">
                <img className="AboutSection__iconImg" src={learnEmoji} alt="Learn"/>
              </i>
              <p className="AboutSection__detailInfo">
                <span>Learn</span> from 20+ workshops covering topics such as cybersecurity, hardware, game development and more!
              </p>
            </li>
            <li className="AboutSection__detail">
              <i className="AboutSection__icon">
                <img className="AboutSection__iconImg" src={relaxEmoji} alt="Learn"/>
              </i>
                <p className="AboutSection__detailInfo">
                  <span>Relax</span> and sit back with other participants as you join us in one of our various activities.
                </p>
            </li>
            {/* <li className="AboutSection__detail">
              <i className="AboutSection__icon">
                <img className="AboutSection__iconImg" src={treatEmoji} alt="Learn"/>
              </i>
              <p className="AboutSection__detailInfo">
                <span>Treat</span> yourself to some of our "Miami" cuisine and more
              </p>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutSection