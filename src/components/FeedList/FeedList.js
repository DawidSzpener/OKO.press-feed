import React, { Component } from 'react'
import axios from 'axios'

class FeedList extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    axios.get('https://pastebin.pl/view/raw/e1658aa0')
    .then(res => {
      let postList = []
      Object.values(res.data.posts).map(post => {
        return( 
          postList.push(
            <h4>
              {post.title}
              {post.thumb}
              {post.data}
              {post.excerpt}
              {post.url}
            </h4>
          )
        )
      })
      this.setState({list: postList})
    })
  }

  render() {
    return(
      <div>
        <h1>List</h1>
        <ul>
          {this.state.list.map(post => {
            return(
              <li>
                {post}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default FeedList
