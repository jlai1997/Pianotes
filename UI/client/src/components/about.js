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
          <p>Pianotes is a student-made student-led production to help musicians
          by converting their music uploaded in a music file to a readable
          sheet music. Not only does Pianotes help musicians with this infamous
          tedius task, it also helps the team within Pianotes the ability to be
          one step closer to graduating from the University of Central Florida,
          the birth home of Pianotes. </p>

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
            <h1>Pianotes' Story</h1>
          </div>
          <p>Pianotes' birth is an interesting tale. It all began during lecture
          of the course COP 4934 at the University of Central Florida. In this
          course teams are formed to create a real-world application from beginning
          to end, which lasts two semesters (COP 4934 and COP 4935).
          Many speakers, companies, even other professors/faculty from the
          university itself attended attempting to convince the students in the course to join
          their team and help complete their projects. They weren't the only ones
          who needed students in their teams. In fact, the professor of the course announced
          that students can create their own teams and their
          own project idea if they met the required number of team members of 4 or higher.
          Jonathan Lai recruited Fazle Akbar and Piero Castillo.
          Jonathan asked for a brainstorm of ideas and Fazle proposed
          to create an application that can detect music notes. A great idea, but he quickly pushed
          it away and continued brainstorming looking for another potential idea. He did not give up on
          the idea though, and the next day during the lecture he approached both students, Jonathan
          and Piero. Not only did Fazle remained focused on the initial note detection idea, but he also
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
