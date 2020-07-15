import React, { Component } from 'react';
// import axios from "axios";
import { Link } from "react-router-dom";
import { getAllPosts} from '../../services/api-helper'

export default class Homepage extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  
  render() {
    return (
      <div className='body'>
        {this.props.posts && this.props.posts.map(post => (
          <Link to={`/Post/${post.id}`}>
          <div className="Posts">
            <img className="post_image" src={post.image_url} alt='post_image' />
            <p className="captions">{post.captions}</p>
          </div>
          </Link>
        ))}
      </div>
    )
  }
}