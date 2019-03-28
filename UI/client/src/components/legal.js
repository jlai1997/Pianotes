import React, { Component } from 'react'
import Footer from './footer.js'
import './legal.css'

class Legal extends Component {
  render() {
    return(
      <div className = "background">

        <div className = "term-back">
          <h1>Terms and Conditions</h1>

          <hr/>

          <div className = "terms-listed">
            <h2>1. Terms </h2>
            <p>By creating an account within Pianotes, you are agreeing
            (with a confirmed agreement during your registration) to be bound by:
            Pianote's Terms and Conditions of Use, all applicable laws and
            regulations, and compliance with any applicable local laws.
            If in the case you do not agree with any of these terms and conditions,
            you are welcome to not create an account with Pianotes, however by not
            continuing to create an account our services and application will be
            unaccessible to you.</p>

            <h2>2. Use License </h2>
            <p>With the use of Pianote's materials and applications, permission
            is granted to modify a piece of musical artwork that must have been composed
            by the account user whom uses Pianote's applications.
            Users of Pianote's applications may not:</p>
            <div className="points">
              <ul>
                <li>use the application to generate an income for the user, a business, or any other
                beneficiary</li>
                <li>violate any copyright law by creating, copying, or/and distributing sheet music
                that does not belong to you or was not given an expressed permission to do so</li>
              </ul>
            </div>
            <p>The user's account will automatically be terminated if they violate
            any of these restrictions and may be terminated by Pianotes at any
            time. Note, that if any copyright law violators may be subject of a
            lawsuit for monetary damages</p>

            <h2>3. Disclaimer </h2>
            <p>All services and materials on Pianotes's web site are provided "as is".
            It is to be noted that Pianote's is a student-made project which may continue
            to improve in development or halt "as is", thus Pianotes does not
            make any representations concerning accuracy, likely results, or reliability of the
            use of the materials on its Internet web site or otherwise relating
            to such materials.</p>

            <h2>4. Limitations </h2>
            <p>In no event shall Pianotes be liable for any damages
            (including, without limitation, damages for loss of data)
            arising out of the use or inability to use the materials on Pianotes's
            Internet webt site. Be advised, however, that Pianote's does not collect
            nor will ever ask for further information than the initial information
            during registration: Full Name, E-mail, and Password.</p>

            <h2>5. Modifications </h2>
            <p>Pianote holds the right to revise these terms of use for its
            web site and account holders at any time without notice.
            Once you've created an account and have accepted these Terms and
            Conditions, you are also agreeing to be bounded by the most
            current version of these Terms and Conditions of Use. </p>
           </div>

        </div>

        <Footer/>
      </div>
    )
  }
}

export default Legal;
