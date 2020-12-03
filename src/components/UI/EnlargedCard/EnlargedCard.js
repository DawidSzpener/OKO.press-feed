import React from 'react'
import  './EnlargedCard.css'

const enlargedCard = (props) => (
  <div className="EnlargedCard">
    <div className="EnlargedCard-left">
      <img src={props.thumb} alt='pic'/>
    </div>
    <div className="EnlargedCard-right">
      <div className="EnlargedCard-right-date">
        {props.date}
      </div>
      <div className="EnlargedCard-right-title">
        <h2>{props.title}</h2>
      </div>
      <div className="EnlargedCard-right-more">
        <br />
        {props.excerpt}
        <br />
        <a href={props.url}>Czytaj dalej</a>
      </div>
    </div>
  </div>
)

export default enlargedCard
