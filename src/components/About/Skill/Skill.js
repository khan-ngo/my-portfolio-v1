import React, { Component } from "react";
import "./Skill.css";

export default class Skill extends Component {
  render() {
    return (
      <div>
        <h1>Responsive Comma List</h1>

        <p>
          A bulleted list that collapses into a comma separated list for mobile.
        </p>

        <p>Shrink the browser window to see the transformation.</p>

        <h4>Skills</h4>

        <ul class="comma-list">
          <li>HTML/HTML5</li>
          <li>CSS/CSS3</li>
          <li>JavaScript</li>
          <li>Responsive Builds</li>
          <li>Mobile Web Apps</li>
          <li>Angular.js</li>
          <li>Ajax</li>
          <li>WordPress</li>
          <li>Sass</li>
          <li>Semantic Markup</li>
          <li>Grunt/Gulp</li>
          <li>Magento eCommerce</li>
        </ul>
      </div>
    );
  }
}
