import React, { Component } from 'react'
import logo from '../shared/Images/MemoryMaker.png'

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, email, password } = this.state;
    const { handleRegister, history } = this.props;

    return (
      <div id="wrapper">
      <div class="main-content">
          <div class="header">
          <img src={logo} />
    </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(this.state);
        history.push('/');
            }}>
                <div class="l-part">
        <h3>Register</h3>
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

        <label>
          Email:
          <input
            type="text"
                    name="email"
                    class="input-2" 
            value={email}
            onChange={this.handleChange}
          />
                </label>
        <br />
        <label>
          Password:
          <input
            type="password"
                  name="password"
                  class="input-1" 
                    value={password}
            onChange={this.handleChange}
          />
        </label>
        <br />
                <button class="btn" >Submit</button>
                </div>
      </form>
      </div>
  </div>
    )
  }
}
