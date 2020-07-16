import React, { Component } from 'react'
import './Login.scss'
import { handleLogin} from '../services/api-helper'
import logo from '../shared/Images/MemoryMaker.png'

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLogin, history } = this.props;

    return (
      <div id="wrapper">
        <div class="main-content">
          <div class="header">
          <img src={logo} />
    </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(this.state);
        history.push('/')
          }}>
             <div class="l-part">
        <h3>Login</h3>
        <label>
          Username:
          <input
            type="text"
                  name="username"
                  class="input-1" 
            value={username}
            onChange={this.handleChange}
          />
        </label>
              <br />
              <div class="overlap-text">
        <label>
          Password:
          <input
            type="password"
                    name="password"
                    class="input-2" 
            value={password}
            onChange={this.handleChange}
                  />
                  {/* <a href="#">Forgot?</a> */}
        </label>
        </div>
        <br />
              <button class='btn'>Submit</button>
            </div>
      </form>
        </div>
        <div class="sub-content">
    <div class="s-part">
      Don't have an account?<a href="/Register">Sign up</a>
    </div>
  </div>
  </div>
    )
  }
}