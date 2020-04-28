import React, { Component } from "react";
import "./Skill.css";

class Skill extends Component {
  render() {
    return (
      <div className="wrapper">
        <img src="headshot-bw.png" height="42" width="42" />
        <div className="card">
          <img className="enclosed" src="./headshot-bw.png" />
        </div>
      </div>
    );
  }
}

export default Skill;
