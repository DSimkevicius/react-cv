import React, { Component } from "react";

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> EXPERIENCE
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <storng>FRONT-END DEVELOPER</storng>
                    <span>2020 - 2021</span>
                  </h6>
                  <p className="pt">
                    CodeAcademy experience by creating projects, apps using web
                    development languages as HTML, CSS, JS, NodeJS, MYSQL. Also
                    using JS libraries for building web interfaces (REACT, VUE).
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