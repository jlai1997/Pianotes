import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

  render(){
    return(
    <div className="header">
      <div className ="inner_header">

        <div className="logo_container">

          <a href="/">
            <div className="logo-pic">
              <img
                src="logo.png"
                alt="logo"
                className="logo-img-head"
              />
            </div>

            <h1>Pianotes</h1>

          </a>

        </div>

        <ul className="navigation">
            <a href="/login"><li>Login</li></a>
            <a href="/legal"><li>Terms</li></a>
            <a href="/about"><li>About</li></a>
        </ul>
      </div>
    </div>

    )
  }
}

export default Header
