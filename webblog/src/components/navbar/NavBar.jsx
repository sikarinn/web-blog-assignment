import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./navbar.css"

const NavBar = ({ user }) => {
    const logout = () => {
        window.open("http://localhost:3000/auth/logout", "_self");
    };

    return (
        <div className="nav">
            <div className="topLeft">
                <li className="title">
                    <Link to="/" className="link"><i className="fa-solid fa-cube"></i>   Webblog</Link>
                </li>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">Write</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <ul className="topList">
                        <li className="topListItem Img">
                            <img src={user.photos[0].value} alt="" className="topImg" />
                        </li>
                        <li className="topListItem Name">{user.displayName}</li>
                        <li className="topListItem Logout">
                            <Link onClick={logout} className="link"><i className="fa-solid fa-right-from-bracket"></i></Link>
                        </li>
                    </ul>
                ) : (
                    <li className="topListItem">
                        <Link className="link" to="login">Login   <i className="fa-solid fa-right-to-bracket"></i></Link>
                    </li>
                )}
            </div>
        </div>
    )
}

export default NavBar;
