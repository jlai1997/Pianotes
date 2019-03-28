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
            <p>Tu ne quaesieris, scire nefas, quem mihi, quem tibi
               finem di dederint, Leuconoe, nec Babylonios
               temptaris numeros. ut melius, quidquid erit, pati.
               seu pluris hiemes seu tribuit Iuppiter ultimam,
               quae nunc oppositis debilitat pumicibus mare
               Tyrrhenum. Sapias, vina liques et spatio brevi
               spem longam reseces. dum loquimur, fugerit invida
               aetas: carpe diem, quam minimum credula postero. </p>

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
