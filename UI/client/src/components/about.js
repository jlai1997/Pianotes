import React, { Component } from 'react'
import Footer from './footer.js'
import './about.css'

class About extends Component {
  render() {
    return(
      <div className="background">
        <div className="about-back">

          <h1>Meet the team</h1>

          <hr/>

          <div className="row">

            <div className="col-sm-6">
              <img
                src="https://today.ucf.edu/files/2012/09/Knightro1-548x365.jpeg"
                alt="logo"
                className="pic"
              />
              <h2>Piero Castillo</h2>
            </div>


            <div className="col-sm-6">
              <img
                src="https://today.ucf.edu/files/2012/09/Knightro1-548x365.jpeg"
                alt="logo"
                className="pic"
              />
              <h2>Kaycee Peeples</h2>
            </div>

          </div>

          <div className="row">

            <div className="col-sm-6">
              <img
                src="https://today.ucf.edu/files/2012/09/Knightro1-548x365.jpeg"
                alt="logo"
                className="pic"
              />
              <h2>Fazle Akbar</h2>
            </div>


            <div className="col-sm-6">
              <img
                src="https://today.ucf.edu/files/2012/09/Knightro1-548x365.jpeg"
                alt="logo"
                className="pic"
              />
              <h2>Jonathan Lai</h2>
            </div>

          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default About;
