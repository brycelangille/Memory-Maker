import React, { Component } from 'react'
// import Header from './components/Header'

import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import { getAllPosts,  createPost } from './services/api-helper'
import Header from "./shared/Header.jsx";
import { withRouter, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import UserProfile from './components/UserProfile/UserProfile'
import Login from './components/Login'
import Register from './components/Register'
import PostDetails from './components/PostDetails.jsx/PostDetails';
import CreatePost from './components/CreatePost/CreatePost'
// import SearchPage from './pages/search-page/SearchPage'
// import RecipeDetail from './pages/RecipeDetail/RecipeDetail'
// import RecipeEdit from './pages/RecipeDetail/RecipeEdit'
// import CreateRecipe from './pages/CreateRecipe/CreateRecipe'

class App extends Component {
  state = {
    currentUser: null,
    posts: null,
    newPost: null
    // users: [],
    // user: [],
  }

  componentDidMount() {
    this.handleVerify();
    this.getPosts();
    // this.getOneUser();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser })
    console.log(currentUser)
  }

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser })
    console.log(currentUser)
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

   getPosts= async () => {
    const posts = await getAllPosts()
    console.log(posts)
    this.setState({ posts })
   }
  
   handleCreatePost = async (postData) => {
    const newPost = await createPost(postData);
    this.setState(prevState => ({
      foods: [...prevState.posts, newPost]
    }))
  }

  // async componentDidMount() {
  //   const users = await getAllUsers()
  //   console.log(users)
  //   this.setState({ users })
  // }


  // async componentDidMount() {
  //   const user = await getOneUser()
  //   console.log(user)
  //   this.setState({ user })
  // }

  render() {
    return (
      <div>
        {/* <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        /> */}
        <div>
        <Link to="/" >
          <Header />
        </Link>
        {this.state.posts && <Route exact path='/' render={(props) => <Homepage posts={this.state.posts} />} />}
          <Route exact path='/Post/:id' render={(props) => <PostDetails id={props.match.params.id} currentUser={this.state.currentUser}  />} />
          <Route exact path='/Login' render={(props) => <Login handleLogin={this.handleLogin} {...props} currentUser={this.state.currentUser} handleRegister={this.handleRegister} />} />
          <Route exact path='/Register' render={(props) => <Register handleRegister={this.handleRegister} {...props} />} />
          <Route exact path='/users/:id' render={(props) => <UserProfile id={props.match.params.id} />} />
          <Route exact path='/createpost' render={(props) => <CreatePost newPost={this.state.newPost} />} />
            {/* <Route path='/search' component={SearchPage} render={(props) => <getAllUsers posts={this.state.users} />} /> */}
          </div>
      </div>
    )
  }
}

export default withRouter(App);