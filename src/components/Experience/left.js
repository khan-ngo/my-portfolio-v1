import React, { Component } from "react";

import "./Experience.css";

class Left extends Component {
  render() {
    return (
      <div className="left">
        <div className="bg-img">
          <div className="left-inner">
            <div className="info">
              <h2 className="name">{this.props.name}</h2>
              <div className="profession">{this.props.profession}</div>
              <div className="social-links">
                <a
                  href={this.props.twitterURL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href={this.props.instaURL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                </a>
                <a
                  href={this.props.githubURL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </a>
                <a
                  href={this.props.linkedinURL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Left;
