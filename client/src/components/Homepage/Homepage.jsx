import React, { Component } from 'react';
// import axios from "axios";
import { getAllPosts, createComment} from '../../services/api-helper'
import CreateComment from '../CreateComment/CreateComment';

export default class Homepage extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  
  handleCreateComment = async (id, commentData) => {
    console.log("snowbaard")
    const newComment = await createComment(id, commentData);
    this.props.addNewComment(newComment, id);
    this.props.history.push('/');
 }
  
  render() {
    return (
      <div className='body'>
        {this.props.posts && this.props.posts.map(post => (
          <div onClick={() => this.props.setVisablePost(post.id)}>
            <div className="Posts">
            <img src={post.user.image_url} />
          <p>{post.user.username}</p>
            <img className="post_image" src={post.image_url} alt='post_image' />
            <p className="captions">{post.captions}</p>
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
            <CreateComment id={post.id} handleCreateComment={this.handleCreateComment}/>
          </div>
        ))}
      </div>
    )
  }
}