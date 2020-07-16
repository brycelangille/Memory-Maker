import React, { Component } from 'react'
import { getOnePost } from '../../services/api-helper'

export default class PostDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      post: null
    }
  }

  componentDidMount = () => {
    this.getPost(this.props.id)
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.id !== prevProps.id) {
      this.getPost(this.props.id)
    }
  }

  getPost= async (id) => {
    const post = await getOnePost(id)
    console.log(post)
    this.setState({ post })
  }
  
  render() {
    return (
      <>
      <div>
        {this.state.post && 
          <div>
          <img src={this.state.post.user.image_url} />
          <p>{this.state.post.user.username}</p>
          <img src={this.state.post.image_url} />
          <p>{this.state.post.captions}</p>
          </div>
  }
        </div>
        <div>
          {this.state.post && this.state.post.comments.map(comment => 
        <>
           <img src={comment.image_url} />
              <p>{comment.content}</p>
              <img src={comment.user.image_url} />
              <p>{comment.user.username}</p>
              </>
      ) }
        </div> 
        </>
    )
  }
}