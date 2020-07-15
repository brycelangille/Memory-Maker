import React, { Component } from "react";
import { getOneUser } from '../../services/api-helper'
// import { withRouter } from "react-router";
// import "UserProfile.scss"

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount = async () => {
    this.getOneUser(this.props.id)
  }

  getPost = async (id) => {
    const user = await getOneUser(id)
    console.log(user)
    this.setState({ user })
  }

  
  render() {
    return (
      <div>
        {this.state.user &&
          <div>
            <img src={this.state.user.image_url} />
            <p>{this.state.user.bio}</p>
          </div>
        }
      </div>
    )
  }
}


