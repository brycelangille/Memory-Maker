import React, { Component } from 'react'

export default class CreatePost extends Component {
  state = {
    Caption: '',
    image_url: ''
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      captions: value,
      image_url: value
    })
  }

  render() {
    const { handleCreatePost, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreatePost;
        // history.push('/posts');
      }}>
        <h3>Create A Post</h3>
        <label>
          Caption:
          <input
            className="input-caption"
            type='text'
            value={this.state.caption}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Add Image:
          <input
                    className="input-image-link"
                    placeholder='Image Link'
                     type='image'
                    value={this.state.image_url}
                    onChange={this.handleChange}
                />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}