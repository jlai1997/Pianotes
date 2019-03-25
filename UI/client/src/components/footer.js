import React, { Component } from 'react';

import './footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="footer-page text-white mt-5 p-4 text-center">
        <hr />
        Copyright &copy; {new Date().getFullYear()} Pianotes
      </div>
    )
  }
}

export default Footer;
