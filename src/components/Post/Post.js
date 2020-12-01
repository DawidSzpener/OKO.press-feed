import React from 'react'
import  './Post.css'

const post = (props) => (
  <li className='Post'>
    {props.title}
    {props.thumb}
    {props.data}
    {props.excerpt}
    {props.url}
  </li>
)

export default post
