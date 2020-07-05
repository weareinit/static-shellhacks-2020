import React from 'react'

import './styles.sass'

import Track from '../Track'
import AI from "../../assets/branding/AI_Track_Icon.svg"
import GameDev from "../../assets/branding/GameDev_Track_Icon.svg"
import Web from "../../assets/branding/Web_Track_Icon.svg"
import IT from "../../assets/branding/IT_Track_Icon.svg"
import Hardware from "../../assets/branding/Hardware_Track_Icon.svg"
import Mobile from "../../assets/branding/Mobile_Track_Icon.svg"

const TrackSection = props => {
  const tracks = [
                    {title: "Web Development", body: "Develop modern and responsive web applications using the latest technologies", image: Web},
                    {title: "Mobile Development", body: "Build interactive mobile applications for the iOS and Android platforms", image: Mobile},
                    {title: "Artificial Intelligence", body: "Implement machine learning algorithms to automate tasks and make predictions", image: AI},
                    {title: "Game Development", body: "Create virtual experiences that bring characters and stories to life", image: GameDev},
                    {title: "Information Technology", body: "Dive into cloud computing, ethical hacking, and cybersecurity", image: IT},
                    {title: "Hardware", body: "Work with microcontrollers to tackle and solve real-world problems", image: Hardware}
                  ]
  return (
    <div className="TrackSection">
      <h2 className="TrackSection__title">Learning Simulations</h2>
      <div className="TrackSection__container">
      {tracks && 
        tracks.map((track,index) =>{
          track = tracks[index]
          return <Track title={track.title} body={track.body} image={track.image}/>
        })}
        
</div>
</div>
  )
}

export default TrackSection