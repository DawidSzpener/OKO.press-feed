import React, { Component } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';

import './FeedList.css'
import Post from '../Post/Post'
import Aux from '../Aux/Aux'

class FeedList extends Component {
  state = {
    list: [],
    shownPosts: [],
    counter: 0
  }

  componentDidMount() {
    axios.get(`https://pastebin.pl/view/raw/e1658aa0`)
    .then(res => {
      let postList = []
      Object.values(res.data.posts).map((post) => {
        return( 
          postList.push(post)
        )
      })
      this.setState({list: postList})
    })
    .then(() => {
      let posts = this.state.list.slice(0-10).map(
        post => {
          return(post)
        }
      )
      let counter = this.state.counter + 10
      this.setState({shownPosts: posts, counter: counter})
    })  
  }

  fetchMoreData = () => {
    console.log('FetchMoreData')
    setTimeout(() => {
      this.setState({
        shownPosts: [...this.state.shownPosts, ...this.state.list.slice(this.state.counter, this.state.counter + 10)],
        counter: this.state.counter + 10
      });
    }, 1500);
  };

  render() {
    return(
      <div id="Container">
        <h1>List</h1>
        <InfiniteScroll
          dataLength={this.state.shownPosts.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.shownPosts.map((post, index) => {
            return(
              <Aux>
                <Post
                  key={index}
                  title={post.title}
                  thumb={post.thumb}
                  data={post.data}
                  excerpt={post.excerpt}
                  url={post.url}
                />
              </Aux>
            )
          })}
        </InfiniteScroll>
      </div>
    )
  }
}

export default FeedList
