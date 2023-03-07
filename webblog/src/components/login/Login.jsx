import "./login.css"
import React from "react";
import { Link } from "react-router-dom";
import Google from "../img/google.png";


export default function Login() {

  const google = () => {
    window.open("https://dc02.coe.psu.ac.th/auth/google", "_self")
  }

  return (
    <div className="login">
      <form className="loginForm">
        <span className="loginTitle">Login to Webblog</span>
        <div className="loginButton google" onClick={google}>
          <img src={Google} alt="" className="icon" />
          Login with Google</div>
      </form>
    </div>
  )
}
