import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Home } from "./assets/Home.svg";
import { ReactComponent as User } from "./assets/User.svg";
import { ReactComponent as CreatePost } from "./assets/CreatePost.svg";
import { ReactComponent as Register } from "./assets/Register.svg";
import { ReactComponent as Login } from "./assets/Login.svg";
// import { ReactComponent as CreatePost } from './assets/CreatePost_icon.png'
// import { ReactComponent as CurrentUserPage } from './assets/CurrentUser_icon.png'
import "./Nav.scss";

export default function Nav(props) {
  return (
    <nav>
      <div className="icon">
        <Link className="HomeiconPlease" to="/">
          <Home />
        </Link>
        {props.currentUser && (
          <Link to={`/users/${props.currentUser.id}`} className="Usericon">
            <User />
          </Link>
        )}
        <Link to="/createpost" className="Createicon">
          <CreatePost />
        </Link>
        <Link to="/Login" className="Loginicon">
          {" "}
          <Login />{" "}
        </Link>
        <Link to="/Register" className="Registericon">
          <Register />
        </Link>
      </div>
    </nav>
  );
}
