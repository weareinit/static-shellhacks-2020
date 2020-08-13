import React from 'react'
import '../../sass/main.sass'
import './styles.sass'

const Track = props => {
  return (
    <div className="Track">
      <img className="Track__img" src={props.image} alt="Track" />
      <div className="Track__body">
        <h4 className="Track__title">{props.title}</h4>
        <p className="Track__text">{props.body}</p>
      </div>
    </div>
  )
}

export default Track
