import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card red lighten-2 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong># CODING SKILLS</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">HTML</p>
                <div className="progress white">
                  <div
                    className="determinate pink accent-3"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">CSS</p>
                <div className="progress white">
                  <div
                    className="determinate pink accent-3
                    "
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">JS</p>
                <div className="progress white">
                  <div
                    className="determinate pink accent-3"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">MYSQL</p>
                <div className="progress white">
                  <div
                    className="determinate pink accent-3"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">NodeJS</p>
                <div className="progress white">
                  <div
                    className="determinate pink accent-3"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}