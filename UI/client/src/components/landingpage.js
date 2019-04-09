import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Landing extends Component {

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/upload');
    }
  }

  render() {
    return(
      <div className ="landing-page">
        <div className="texts">

          <p1>Create Sheet Music</p1>
          <p>Convert your sound files to sheet music</p>
        </div>

        <Link to="/login">
          <div className="outer-box">
            <div className="banner-text">
              <div className="social-links">
                <img class= "icon" src="music-file.png"/>
              </div>
              <p>Log in to get started</p>
            </div>
        </div>
        </Link>

        <Footer />
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
