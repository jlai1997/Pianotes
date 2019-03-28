import React, { Component } from 'react'
import Footer from './footer.js'
import './about.css'

class About extends Component {
  render() {
    return(
      <div className="about-background">
        <div className="aboutus">
          <div className="about-title">
            <h1>About Us</h1>
          </div>
          <p>Tu ne quaesieris, scire nefas, quem mihi, quem tibi
             finem di dederint, Leuconoe, nec Babylonios
             temptaris numeros. ut melius, quidquid erit, pati.
             seu pluris hiemes seu tribuit Iuppiter ultimam,
             quae nunc oppositis debilitat pumicibus mare
             Tyrrhenum. Sapias, vina liques et spatio brevi
             spem longam reseces. dum loquimur, fugerit invida
             aetas: carpe diem, quam minimum credula postero. </p>

         <div className="ucf-pic">
           <img
             className="ucf-logo"
             src="https://www.evokad.com/wp-content/uploads/2018/05/UCF-Logo.png"
             alt="logo"
           />
         </div>
        </div>

        <div className="story">
          <div className="about-title">
            <h1>Pianote's Story</h1>
          </div>
          <p>Pianote's birth is an interesting tale. It all began during lecture
          of the course COP 4934 at the University of Central Florida. In this
          course teams are formed to create a real-world application from beginning
          to end, which lasts two semesters (COP 4934 and COP 4935).
          Many speakers, companies, even other professors/faculty from the
          university itself attended attempting to convince the students in the course to join
          their team and help complete their project. They weren't the only ones
          trying to recruit students, in fact the professor of the course announced
          at the beginning of the course that students can create their own teams and their
          own project idea if they met the required number of team members of 4 or higher.
          Jonathan Lai recruited Fazle Akbar and Piero Castillo.
          Jonathan asked for a brainstorm of ideas and Fazle proposed
          to create an application that can detect music notes. A great idea, but he
          continued brainstorming looking for another potential idea. He did not give up on
          the idea, however, and the next day during the lecture he approached both students, Jonathan
          and Piero, and not only remained focused on the initial note detection idea, he also
          brought back research on how it could be completed. All that was left was
          to recruit 1 more member to be an official team for the course. The day for students
          to pitch their ideas to other students arrived, and unfortunately the trio were nowhere on the
          list to present. Fortunate for the three the professor allocated time at the end for
          additional pitches, and within a quick 5 minute pitch of the project idea the three were
          able to convince 1 more member to join the team, Kaycee Peeples. With Kaycee and Jonathan
          both being musicians in piano, and Kaycee being able to brainstorm a handful of interesting
          names for the team, Pianotes was born. 
          </p>
        </div>

        <div className="about-back">

          <h1>Meet The Team</h1>

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
