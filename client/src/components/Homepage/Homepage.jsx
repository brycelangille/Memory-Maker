import React, { Component } from 'react';
// import axios from "axios";
import { getAllPosts, createComment, deletePost, putComment, updateComment, deleteComment} from '../../services/api-helper'
import CreateComment from '../CreateComment/CreateComment';
import UpdatePost from '../UpdatePost/UpdatePost'
import CommentComponent from '../CommentComponent/CommentComponent'
import './Homepage.scss'

export default class Homepage extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const posts = await getAllPosts()
    console.log(posts)
    this.setState({posts})
  }
  
  handleCreateComment = async (id, commentData) => {
    console.log("snowbaard")
    const newComment = await createComment(id, commentData);
    this.props.addNewComment(newComment, id);
    this.props.history.push('/');
    this.props.reload()
  }

  handleCommentUpdate = async (id, commentData) => {
    const updateComment = await putComment(id, commentData);
    const updatePost = this.state.posts.find(post => post.id == updateComment.post_id)
    updatePost.comments = [...updatePost.comments.filter(comment => comment.id !== updateComment.id), updateComment]
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id == updatePost.id ? updatePost : post ) 
    }))
  }
  
  handleCommentDelete = async (id) => {
    const response = await deleteComment(id);
    const deletedComment = response.data
    const updatePost = this.state.posts.find(post => post.id == deletedComment.post_id)
    updatePost.comments = updatePost.comments.filter(comment => comment.id !== deletedComment.id)
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id == updatePost.id ? updatePost: post )
    }))
  }

  handlePostDelete = async (id) => {
    await deletePost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id != id)
    }))
  }
 
  handleUpdate = (id) => {
    this.props.clearVisablePost()
    this.props.history.push(`/post/${id}/update`)
  }


  render() {
    return (
      <div className='body'>
        {this.state.posts && this.state.posts.map(post => (
          <div className="CompletePostIncludeComment">
          <div onClick={() => this.props.setVisablePost(post.id)}>
              <div className="Posts">
                <div className="Userinfo">
            <img src={post.user.image_url} className="usericon" />
                  <p className="usernameicon" >{post.user.username} </p>
                  </div>
                <img className="post_image" src={post.image_url} alt='post_image' />
                <div className="captioninfo">
                <p className="captionName" >{post.user.username} </p>
                  <p className="captions">{post.captions}</p>
                </div>
                </div>
        
              <div>
    
          {post && post.comments.map(comment => 
            <CommentComponent comment={comment} handleCommentDelete={this.handleCommentDelete} handleCommentUpdate={this.handleCommentUpdate} currentUser={this.props.currentUser} {...this.props} />
              )}
              </div> 
              </div>
            <CreateComment id={post.id} handleCreateComment={this.handleCreateComment} />
            <div className="update-deletebuttons">
            <button classsNme="DeleteButton" onClick={() => this.handlePostDelete(post.id)}>Delete</button>
            <button classsNme="UpdateButton" onClick={() => this.handleUpdate(post.id)}>Update</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}