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
        Ready for a weekend full of learning, innovation, and fun? Come and join us at ShellHacks, Florida's Largest Hackathon! Enter a new dimension as 1,000+ students from around the world come to learn the latest technologies, build innovative projects, and showcase their talents. 
        <br/><br/>Explore the world of technology through our learning tracks and interactive workshops. Work together with fellow students and mentors to develop projects solving exciting challenges. Meet with recruiters from top companies hiring students for internships and job opportunities. And win amazing prizes - all at ShellHacks!
        </p>
        
      </div>
    </div>
  )
}

export default AboutSection