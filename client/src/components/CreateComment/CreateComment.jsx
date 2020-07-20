import React, { Component } from "react";
import "./CreateComment.scss";

export default class CreateComment extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { handleCreateComment, history } = this.props;
    return (
      <div className="commentshelper">
        <form
          className="CommentEverything"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleCreateComment(this.props.id, this.state);
          }}
        >
          <label>
            <input
              name="content"
              className="content-input"
              type="text"
              placeholder="Add a comment..."
              value={this.state.content}
              onChange={this.handleChange}
            />
          </label>
          <button className="postButton">Post</button>
        </form>
      </div>
    );
  }
}
