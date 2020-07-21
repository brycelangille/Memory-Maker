import React, { Component } from "react";
import { getOneUser } from '../../services/api-helper'
// import { withRouter } from "react-router";
import "./UserProfile.scss"

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount = async () => {
    this.getUser(this.props.id)
  }

  getUser = async (id) => {
    const user = await getOneUser(id)
    console.log(user)
    this.setState({ user })
  }

  
  render() {
    return (
      <>
        <div className="container">
          <div className="profile">
            {this.state.user &&
              <div className="moreProfile">
              <div className="profile-info">
              
            <img src={this.state.user.image_url} className="profile-image" />
            <h1 className="profile-user-name ">{this.state.user.username}</h1>
            <p className="profile-bio">{this.state.user.bio} </p>
              </div>
              </div>
        }
        </div>
        </div>
      <div className="I">
          {this.state.user.posts && this.state.user.posts.map(posts => 
            <>
              <div className="gallery">
           <img className="gallery-image" src={posts.image_url} />
              <p className="gallery-item-info">{posts.captions}</p>
              </div>
              </>
      ) }
        </div>
        </>
    )
  }
}