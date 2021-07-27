import React, { Component } from "react";

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> CODING EXPERIENCE
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>FRONT-END DEVELOPER</strong>
                    <span>2020 - 2021</span>
                  </h6>
                  <p className="pt">
                    CodeAcademy experience by creating projects, apps using web
                    development languages as HTML, CSS, JS, NodeJS, MySQL. Using
                    JS libraries for building web interfaces (React, Vue). Also
                    learned basics how to use platforms such as Firebase,
                    DigitalOcean. As of now, I can write clean, reusable and
                    responsive code in HTML, CSS and Javascript. I have learned
                    how to work with CSS frameworks, such as Bulma, Boostrap and
                    others.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
