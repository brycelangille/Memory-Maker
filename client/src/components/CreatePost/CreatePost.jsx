import React, { Component } from 'react'

export default class CreatePost extends Component {
  state = {
    captions: '',
    image_url: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { handleCreatePost, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreatePost(this.state);
      }}>
        <h3>Create A Post</h3>
        <label>
          Caption:
          <input
            name="captions"
            className="input-caption"
            type='text'
            value={this.state.caption}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Add Image:
          <input 
                    name='image_url'
                    className="input-image-link"
                    placeholder='Image Link'
                     type='text'
                    value={this.state.image_url}
                    onChange={this.handleChange}
                />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}