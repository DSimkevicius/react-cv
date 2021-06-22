import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="card red lighten-2 z-depth-0">
          <div className="card-content lefty">
            <h6 className="white-text">
              <strong># CONTACT</strong>
            </h6>
            <hr />
            <h5 className="white-text text-lighten-3 pt">Phone: </h5>
            <p className="portfolio white-text text pt">+370 622 36 179</p>

            <h5 className="white-text text-lighten-3 pt">
              Portfolio Homepage:
            </h5>
            <p>
              <a className="portfolio" href="http://dsimkevicius.lt/">
                http://dsimkevicius.lt/
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
