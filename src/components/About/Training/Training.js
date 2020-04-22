import React, { Component } from "react";
import "./Training.css";

export default class Training extends Component {
  render() {
    return (
      <section id="sec">
        <h2>Training</h2>
        <ul>
          <li>
            <span class="fa fa-code" />
            <div>
              <a
                href="https://www.platformbyps.org/boston/application-developer"
                rel="noopener noreferrer"
                target="_blank"
              >
                Platform by Per Scholas
              </a>
            </div>
            <h3>Java Full-Stack Web Developer</h3>
            <p>
              Training covered exploration on how to be efficient in Agile-Scrum
              project methodologies using Jira. Managed databases requiring SQL
              and learned how to install, configure, connect, query with
              MariaDB. Additional topics included collections, basic I/O, JDBC,
              JPA, and Spring MVC
            </p>
          </li>
          <li>
            <span class="fa fa-code" />
            <div>
              <a
                href="https://generalassemb.ly/blog/tag/web-development-immersive"
                rel="noopener noreferrer"
                target="_blank"
              >
                General Assembly
              </a>
            </div>
            <h3>Web Development Immersive (WDI) Program</h3>
            <p>
              Full Stack web development program focusing on ES6 JavaScript,
              Bootstrap, JSON, jQuery, HTML5, CSS3, Ruby, Rails, Node, Express,
              Ember, React.js, MongoDB, Postgress, SQL, GIT, problem-solving,
              planning, modeling, and maintaining applications with client-API
              architectures, as well as software engineering principles
              including design patterns, sorting algorithms, big O notation,
              recursion, and data structures from linked lists to binary trees.
              This program requires work in teams and independently to build
              functioning sites that solve real- world business problems.
            </p>
          </li>
        </ul>
      </section>
    );
  }
}
