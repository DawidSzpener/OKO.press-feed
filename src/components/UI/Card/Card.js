import React from 'react'
import  './Card.css'

const card = (props) => (
  <div className="Card" onClick={props.clicked}>
    <div className="Card-left">
      <img src={props.thumb} alt='pic'/>
    </div>
    <div className="Card-right">
      <div className="Card-right-title">
        <h1>{props.title}</h1>
      </div>
    </div>
  </div>
)

export default card
