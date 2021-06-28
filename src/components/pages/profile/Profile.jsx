import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="card teal darken-3 z-depth-0 hide-on-large-only">
          <div className="card-content center social">
            <h2 className="grey-text text-lighten-3">
              <strong>Dovydas Šimkevičius</strong>
            </h2>
            <h5 className="white-text text-lighten-1">Front-End Developer</h5>
            <a href="https://github.com/DSimkevicius" target="blank">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
