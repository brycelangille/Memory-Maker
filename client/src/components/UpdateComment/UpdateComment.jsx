import React, { Component } from 'react'

export default class UpdateComment extends Component {
  state = {
    content: ''
  }

  componentDidMount() {
    if (this.props.commentItem) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.commentItem !== this.props.commentItem ) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      name: this.props.commentItem.name
    })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  handleCommentUpdate = async (id, commentData) => {
    const newComment = await putComment(id, commentData);
    this.setState(prevState => ({
      comments: prevState.comments.map(comment => comment.id === parseInt(id) ? newComment : comment)
    }))
  }

  render() {
    const { handleCommentUpdate, history, id } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCommentUpdate(id, this.state);
        history.push('/');
      }}>
        <h3>Update Comment</h3>
        <label>
        Comment:
          <input
            name="content"
            className="content"
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}