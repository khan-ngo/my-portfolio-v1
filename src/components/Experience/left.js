import React, { Component } from "react";

import "./Experience.css";

class Left extends Component {
  render() {
    return (
      <div className="left">
        <div className="bg-img">
          <div className="left-inner">
            <div className="info">
              <h2 className="name" />
              <div className="profession" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Left;
