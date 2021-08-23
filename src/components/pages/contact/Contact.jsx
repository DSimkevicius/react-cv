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
              <h6 className="orange-text">
                E-shop 🛒 CRUD functions using firebase.
              </h6>
              <a className="portfolio" href="https://eshop-baigiamsi.web.app/">
                E-shop website
              </a>
              <span className="white-text">Code:</span>
              <a
                href="https://github.com/DSimkevicius/Dovydas-Simkevicius-Baigiamasis-Front"
                target="blank"
              >
                <i className="fab fa-github-square fa-2x color-change"></i>
              </a>
              <h6 className="orange-text">
                Todo app with functions using REACT:
              </h6>
              <a
                className="portfolio"
                href="https://simkevicius-todo.netlify.app/"
              >
                TODO APP WEBSITE
              </a>
              <span className="white-text">Code:</span>
              <a
                href="https://github.com/DSimkevicius/React-TODO"
                target="blank"
              >
                <i className="fab fa-github-square fa-2x color-change"></i>
              </a>
              <h6 className="orange-text pt">
                Chat application (Google auth. Real-time chatting.)
              </h6>
              <span className="white-text">FRONT-END code: </span>{" "}
              <a href="https://github.com/DSimkevicius/chat-app" target="blank">
                <i className="fab fa-github-square fa-2x color-change"></i>
              </a>
              <h6 className="orange-text pt">
                Recipe website using Vue and NodeJS (Undeployed, not finished):
              </h6>
              <span className="white-text">FRONT-END code: </span>{" "}
              <a
                href="https://github.com/DSimkevicius/recipe-page"
                target="blank"
              >
                <i className="fab fa-github-square fa-2x color-change"></i>
              </a>
              <p>
                <span className="white-text">BACK-END code: </span>{" "}
                <a
                  href="https://github.com/DSimkevicius/recipe-page-back-end"
                  target="blank"
                >
                  <i className="fab fa-github-square fa-2x color-changer"></i>
                </a>
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
