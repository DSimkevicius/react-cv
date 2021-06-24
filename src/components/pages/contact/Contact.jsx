import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="card teal darken-3 z-depth-0">
          <div className="card-content lefty">
            <h6 className="white-text">
              <strong># CONTACT</strong>
            </h6>
            <hr />
            <h5 className="white-text text-lighten-3 pt">Phone: </h5>
            <p className="portfolio white-text text pt">+370 622 36 179</p>

            <h5 className="white-text text-lighten-3 pt">
              You can check my projects here:
            </h5>
            <p>
              <h6>Todo app with functions using REACT:</h6>
              <a
                className="portfolio"
                href="https://simkevicius-todo.netlify.app/"
              >
                https://simkevicius-todo.netlify.app/
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
