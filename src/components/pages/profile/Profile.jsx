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

            <a href="https://linkedin.com" target="blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/DSimkevicius" target="blank">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
          </div>
        </div>
        {/* <div className="card red lighten-2 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong># PROFILE</strong>
            </h6>
            <hr />
            <p className="white-text text-lighten-3 pt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              minima quod molestias numquam, cumque eveniet delectus dolore
              laborum molestiae quis possimus eos dignissimos cupiditate ipsam
              sunt doloremque commodi adipisci quasi?
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}
