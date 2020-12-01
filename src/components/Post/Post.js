import React from 'react'
import  './Post.css'

const post = (props) => (
  <li className='Post'>
    <img src={props.thumb} alt='pic'/>
    <h5>{props.title}</h5>
    <h6>{props.data}</h6>
    {props.excerpt}
    {props.url}
  </li>
)

export default post
