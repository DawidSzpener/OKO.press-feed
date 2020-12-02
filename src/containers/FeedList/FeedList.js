import React, { Component } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';

import './FeedList.css'
import Card from '../../components/UI/Card/Card'
import Spinner from '../../components/UI/Spinner/Spinner'
import EnlargedCard from '../../components/UI/EnlargedCard/EnlargedCard'

class FeedList extends Component {
  state = {
    list: [],
    shownPosts: [],
    counter: 0,
    showPost: false,
    enlargedPost: null
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
    .catch(err => {
      console.log(err)
    })  
  }

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        shownPosts: [...this.state.shownPosts, ...this.state.list.slice(this.state.counter, this.state.counter + 10)],
        counter: this.state.counter + 10
      });
    }, 1500);
  };

  enlarge = (post) => {
    this.setState({ enlargedPost: post, showPost: true })
  }

  render() {
    let shownPost = null

    if(this.state.showPost){
      shownPost = <EnlargedCard 
        title={this.state.enlargedPost.title}
        thumb={this.state.enlargedPost.thumb}
        date={this.state.enlargedPost.date}
        excerpt={this.state.enlargedPost.excerpt}
        url={this.state.enlargedPost.url}
      />
    }

    return(
      <div style={{marginTop: '50px'}}>
        {shownPost}
        <InfiniteScroll
          dataLength={this.state.shownPosts.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<Spinner />}
        >
          {this.state.shownPosts.map((post, index) => {
            return(
              <Card
                key={index}
                title={post.title}
                thumb={post.thumb}
                clicked={(post) => this.enlarge(post)}
              />
            )
          })}
        </InfiniteScroll>
        <div id="bg-pic"></div>
      </div>
    )
  }
}

export default FeedList
