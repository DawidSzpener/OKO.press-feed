import React, { Component } from 'react'
import axios from 'axios'

import Post from '../Post/Post'
import Aux from '../Aux/Aux'

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
            <Post
              title = {post.title}
              thumb = {post.thumb}
              data = {post.data}
              excerpt = {post.excerpt}
              url = {post.url}
            />
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
        <ul className="FeedList">
          {this.state.list.map(post => {
            return(
              <Aux>
                {post}
              </Aux>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default FeedList
