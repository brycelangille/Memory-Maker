import React, { Component } from "react";
import "./CommentComponent.scss"

export default class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      content: '',
      edit: false
    };
  }

  componentDidMount = () => {
    this.setState({ content: this.props.comment.content})
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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { comment, currentUser, handleCommentUpdate, history } = this.props;
    return (
      <div className="comment_body">
        <>
          <div className="commentcommentcomment">
        <div className="commentinfo">
            <img src={comment.user.image_url} className="commentuser_image" />
          <p className="usernameicon_commenter">{comment.user.username}</p>
          </div>
          <div className="updatedelete">
          {this.state.edit ?
           <form onSubmit={(e) => {
            e.preventDefault();
                  handleCommentUpdate(comment.id, { content: this.state.content });
                  this.setState({edit: false})
            history.push('/');
          }}>
            <input
            name="content"
            className="content"
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
              />
            <input type="submit" />
              </form>
              :
            <p className="commentContent">{comment.content}</p>}
          {this.state.showOptions && (
            <>
              <button onClick={() => {this.toggleEdit()}}>Edit</button>
              <button
                onClick={() => {
                  this.toggleOptions;
                  this.props.handleCommentDelete(comment.id);
                }}
              >
                Delete
              </button>
            </>
          )}
            {currentUser.id == comment.user_id && <button onClick={this.toggleOptions}>...</button>}
            </div>
            </div>
        </>
      </div>
      
    );
  }
}
