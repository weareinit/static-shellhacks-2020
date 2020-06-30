import React from 'react'

import './styles.sass'

import Track from '../Track'

const TrackSection = props => {
  const tracks = [
                    {title: "Web Development", body: "ShellHacks is taking place from September 25th through the 27th virtually"},
                    {title: "Mobile Development", body: "ShellHacks is taking place from September 25th through the 27th virtually"},
                    {title: "Artificial Intelligence", body: "ShellHacks is taking place from September 25th through the 27th virtually"},
                    {title: "Game Development", body: "ShellHacks is taking place from September 25th through the 27th virtually"},
                    {title: "Information Technology", body: "ShellHacks is taking place from September 25th through the 27th virtually"},
                    {title: "Hardware", body: "ShellHacks is taking place from September 25th through the 27th virtually"}
                  ]
  return (
    <div className="TrackSection">
      <h2 className="TrackSection__title">Learning Simulations</h2>
      <div className="TrackSection__container">
      {tracks && 
        tracks.map((track,index) =>{
          track = tracks[index]
          return <Track title={track.title} body={track.body} />
        })}
        
</div>
</div>
  )
}

export default TrackSection