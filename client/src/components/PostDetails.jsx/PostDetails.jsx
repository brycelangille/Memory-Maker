import React, { Component } from 'react'
import { getOnePost } from '../../services/api-helper'
import './PostDetails.scss'

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
      <div className="everything">
        {this.state.post && 
            <div className="CompletePostIncludeComment">
            <button onClick={this.props.clearVisablePost}>X</button>
            <div className="Posts">
              <div className="Userinfo">
          <img src={this.state.post.user.image_url} className="usericon"  />
              <p className="usernameicon">{this.state.post.user.username}</p>
              </div>
          <img src={this.state.post.image_url} className="post_image" />
          <p className="captions">{this.state.post.captions}</p>
            </div>
            </div>
  }
        </div>
        <div className="ThePostComments">
          {this.state.post && this.state.post.comments.map(comment => 
        <>
           <img src={comment.image_url} className="CommentImage" />
              <p>{comment.content}</p>
              <img src={comment.user.image_url} />
              <p>{comment.user.username}</p>
              </>
          )}
          </div>
        </>
    )
  }
}