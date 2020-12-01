import React from 'react'
import  './Post.css'

const post = (props) => (
  <div className="Card">
    <div className="Card-left">
      <img src={props.thumb} alt='pic'/>
    </div>
    <div className="Card-right">
      <div className="Card-right-date">
        {props.date}
      </div>
      <div className="Card-right-title">
        <h1>{props.title}</h1>
      </div>
      <div className="Card-right-more">
        <br />
        {props.excerpt}
        <br />
        <a href={props.url}>Czytaj dalej</a>
      </div>
    </div>
  </div>
)

export default post
