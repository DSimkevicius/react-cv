import React, { Component } from "react";
import Profile from "./profile/Profile.jsx";
import Contact from "./contact/Contact.jsx";
import About from "./about/About.jsx";
import Skills from "./skills/Skills.jsx";
import Experiences from "./experiences/Experiences.jsx";
import Educations from "./educations/Educations.jsx";
import References from "../references/References.jsx";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="row sameHeight">
          <div className="col s12 m12 l4 teal darken-3 sameHeight_child">
            <Profile />
            <Contact />
            <Skills />
          </div>
          <div className="col s12 m12 l8 white sameHeight_child">
            <About />
            <Educations />
            <Experiences />
            <References />
          </div>
        </div>
      </section>
    );
  }
}
