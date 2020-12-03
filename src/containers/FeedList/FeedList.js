import React, { Component } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';

import './FeedList.css'
import Card from '../../components/UI/Card/Card'
import Spinner from '../../components/UI/Spinner/Spinner'
import EnlargedCard from '../../components/UI/EnlargedCard/EnlargedCard'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import okopress from '../../assets/images/okopress.png'


class FeedList extends Component {
  state = {
    list: [],
    shownPosts: [],
    counter: 0,
    showPost: false,
    enlargedPost: null
  }

  componentDidMount() {
    axios.get(`http://localhost:3002/posts`)
    .then(res => {
      let postList = []
      console.log(res)
      Object.values(res.data).map((post) => {
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

  hideEnlargedPost = () => {
    this.setState({ enlargedPost: null, showPost: false })
  }

  render() {
    let shownPost = null
    let backdrop = null

    if(this.state.showPost){
      shownPost = <EnlargedCard 
        title={this.state.enlargedPost.title}
        thumb={this.state.enlargedPost.thumb}
        date={this.state.enlargedPost.date}
        excerpt={this.state.enlargedPost.excerpt}
        url={this.state.enlargedPost.url}
      />
      backdrop = <Backdrop
        show={this.state.showPost}
        clicked={() => this.hideEnlargedPost()}/>
    }

    return(
      <div style={{marginTop: '50px'}}>
        {shownPost}
        {backdrop}
        <img alt='okopress logo' src={okopress}/>
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
                clicked={() => this.enlarge(post)}
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
