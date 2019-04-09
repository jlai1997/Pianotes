import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="footer-page text-white mt-5 p-4 text-center">
        <hr />
        <div className="logo-foot">
          <Link className="footer-link" to="/about">
            <img
              className="foot-logo"
              src="logo-name2.png"
              alt="logo"
            />
          </Link>
        </div>
        Copyright &copy; {new Date().getFullYear()} Pianotes
      </div>
    )
  }
}

export default Footer;
