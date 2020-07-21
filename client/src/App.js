import React, { Component } from "react";
// import Header from './components/Header'
import "./App.css";

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { getAllPosts, createPost } from "./services/api-helper";
import Header from "./shared/Header.jsx";
import Footer from "./shared/Footer.jsx";
import { withRouter, Route, Link, Redirect } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import UserProfile from "./components/UserProfile/UserProfile";
import Login from "./components/Login";
import Register from "./components/Register";
import PostDetails from "./components/PostDetails.jsx/PostDetails";
import CreatePost from "./components/CreatePost/CreatePost";
import CreateComment from "./components/CreateComment/CreateComment";
import UpdatePost from "./components/UpdatePost/UpdatePost";

class App extends Component {
  state = {
    currentUser: null,
    posts: null,
    createPost: null,
    visablePost: null,
  };

  componentDidMount() {
    this.handleVerify();
    this.getPosts();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser });
    console.log(currentUser);
  };

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser });
    console.log(currentUser);
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });
    localStorage.removeItem("authToken");
    removeToken();
    this.props.history.push("/");
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  getPosts = async () => {
    const posts = await getAllPosts();
    console.log(posts);
    this.setState({ posts });
  };

  handleCreatePost = async (postData) => {
    console.log("skateboard");
    const newPost = await createPost(postData);
    this.setState((prevState) => ({
      posts: [...prevState.posts, newPost],
    }));
    this.props.history.push('/');
  };

  setVisablePost = (id) => {
    this.setState({
      visablePost: id,
    });
  };

  clearVisablePost = () => {
    this.setState({
      visablePost: null,
    });
  };

  addNewComment = (newComment, id) => {
    const updatedPost = this.state.posts.find(
      (post) => post.id == newComment.post_id
    );
    updatedPost.comments.push(newComment);
    this.setState((prevState) => ({
      posts: prevState.posts.map((post) =>
        post.id == id ? updatedPost : post
      ),
    }));
  };

  render() {
    return (
      <div className="body">
        <div>
          <Link to="/">
            <Header />
          </Link>

          {this.state.posts && (
            <Route
              exact
              path="/"
              render={(props) => (
                <Homepage
                  posts={this.state.posts}
                  setVisablePost={this.setVisablePost}
                  currentUser={this.state.currentUser}
                  handleLogout={this.handleLogout}
                  addNewComment={this.addNewComment}
                  {...props}
                  clearVisablePost={this.clearVisablePost}
                />
              )}
            />
          )}
          {this.state.visablePost && (
            <PostDetails
              id={this.state.visablePost}
              currentUser={this.state.currentUser}
              clearVisablePost={this.clearVisablePost}
            />
          )}
          <Route
            exact
            path="/Login"
            render={(props) => (
              <Login
                handleLogin={this.handleLogin}
                {...props}
                currentUser={this.state.currentUser}
                handleRegister={this.handleRegister}
              />
            )}
          />
          <Route
            exact
            path="/Register"
            render={(props) => (
              <Register handleRegister={this.handleRegister} {...props} />
            )}
          />
          <Route
            exact
            path="/users/:id"
            render={(props) => <UserProfile id={props.match.params.id} />}
          />
          <Route
            exact
            path="/createpost"
            render={(props) => (
              <CreatePost
                handleCreatePost={this.handleCreatePost}
                {...props}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/post/:id/update"
            render={(props) => (
              <UpdatePost
                {...props}
                currentUser={this.state.currentUser}
                getPosts={this.getPosts}
              />
            )}
          />
          {/* <Route path='/search' component={SearchPage} render={(props) => <getAllUsers posts={this.state.users} />} /> */}
        </div>
        <Footer currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default withRouter(App);
