import React, { Component } from 'react'
import { getOnePost, putPost } from '../../services/api-helper'

export default class UpdatePost extends Component {
  state = {
    captions: '',
    image_url: '',
    showOptions: false,
    edit: false
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const post = await getOnePost(id) 
    console.log(post)
    this.setState({ captions: post.captions, image_url: post.image_url})
    }
  

  componentDidUpdate(prevProps) {
    if ( prevProps.postItem !== this.props.postItem ) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      name: this.props.postItem.name
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  toggleOptions = () => {
    this.setState((prevState) => ({
      showOptions: !prevState.showOptions,
    }));
  };

  toggleEdit = () => {
    console.log("toggleEdit")
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };


  handlePostUpdate = async (id, postData) => {
    const newPost = await putPost(id, postData);
    console.log(newPost)
   this.props.getPosts()
  }

  render() {
    const { handlePostUpdate, history, match } = this.props;
    const { id } = this.props.match.params
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.handlePostUpdate(id, this.state);
        history.push(`/`);
      }}>
        <h3>Update Post</h3>
        <label>
          Caption:
          <input
            name="captions"
            className="input-caption"
            type='text'
            value={this.state.captions}
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
         <input type="submit" />
      </form>
    )
  }
}