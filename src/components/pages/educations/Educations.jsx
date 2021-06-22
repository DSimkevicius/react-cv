import React, { Component } from "react";

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i class="fas fa-graduation-cap"></i> EDUCATION
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>CAD (Computer-Aided Design) operator</strong>
                    <span>2016 - 2019</span>
                  </h6>
                  <p className="pt">
                    Proficiency in the use of AutoCad, MS Word and MS Excel.
                    Also Adobe Photoshop and CorelDraw basics.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>CodeAcademy</strong>
                    <span>2020 - 2021</span>
                  </h6>
                  <p className="pt">Front-End development course.</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
