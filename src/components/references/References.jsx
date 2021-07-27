import React, { Component } from "react";

export default class References extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i></i>📱 REFERENCES
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Petras Šlekys</strong>
                    <span>
                      <strong>Tech Lead, IBM iX</strong>
                    </span>
                  </h6>
                  <p className="pt">petras@ibm.com</p>
                  <p className="pt">+370 675 74401</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
