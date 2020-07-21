import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Home1 } from "./assets/Home1.svg";
import { ReactComponent as User1 } from "./assets/User1.svg";
import { ReactComponent as CreatePost } from "./assets/CreatePost.svg";
import { ReactComponent as Register } from "./assets/Register.svg";
import { ReactComponent as Login2 } from "./assets/Login2.svg";
// import { ReactComponent as CreatePost } from './assets/CreatePost_icon.png'
// import { ReactComponent as CurrentUserPage } from './assets/CurrentUser_icon.png'
import "./Nav.scss";

export default function Nav(props) {
  return (
    <nav>
      <div className="icon">
        <Link className="HomeIcon" to="/">
          <Home1 />
        </Link>
        {props.currentUser && (
          <Link to={`/users/${props.currentUser.id}`} className="Usericon">
            <User1 />
          </Link>
        )}
        <Link to="/createpost" className="Createicon">
          <CreatePost />
        </Link>
        <Link to="/Login" className="Login">
          <Login2 />
        </Link>
        <Link to="/Register" className="Registericon">
          <Register />
        </Link>
      </div>
    </nav>
  );
}

