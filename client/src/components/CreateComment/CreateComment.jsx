import React, { Component } from 'react'

export default class CreateComment extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { handleCreateComment, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleCreateComment(this.props.id, this.state);
        this.setState({content: ""})
      }}>
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