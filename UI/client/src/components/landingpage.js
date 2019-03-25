import React, { Component } from 'react';
import Footer from './footer';

class Landing extends Component {
  render() {
    return(
      <div className ="landing-page">
        <div className="texts">

          <p1>Create Sheet Music</p1>
          <p>Convert your sound files to sheet music</p>
        </div>

        <a href="/login">
          <div className="outer-box">
            <div className="banner-text">
              <div className="social-links">
                <img class= "icon" src="music-file.png"/>
              </div>
              <p>Log in to get started</p>
            </div>
        </div>
        </a>

        <Footer />
      </div>
    )
  }
}

export default Landing;
