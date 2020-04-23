import React, { Component } from "react";

import {
  TrainingContainer,
  TrainingContent,
  TrainingProgramName,
  TrainingHeader,
  Program,
  TrainingSchool,
  TrainingIcon,
  TrainingDescription,
} from "./TrainingStyles";

export default class Training extends Component {
  render() {
    return (
      <TrainingContainer>
        <TrainingHeader>BootCamp Training</TrainingHeader>
        <TrainingContent>
          <Program>
            <TrainingIcon>
              <span class="fa fa-code" />
            </TrainingIcon>
            <TrainingSchool>
              <a
                href="https://www.platformbyps.org/boston/application-developer"
                rel="noopener noreferrer"
                target="_blank"
              >
                Platform by Per Scholas
              </a>
            </TrainingSchool>
            <TrainingProgramName>
              Java Full-Stack Web Developer
            </TrainingProgramName>
            <TrainingDescription>
              Training covered exploration on how to be efficient in Agile-Scrum
              project methodologies using Jira. Managed databases requiring SQL
              and learned how to install, configure, connect, query with
              MariaDB. Additional topics included collections, basic I/O, JDBC,
              JPA, and Spring MVC
            </TrainingDescription>
            <TrainingDescription>
              This program requires work in teams and independently to build
              functioning sites that solve real- world business problems.
            </TrainingDescription>
          </Program>
          <Program>
            <TrainingIcon>
              <span class="fa fa-code" />
            </TrainingIcon>
            <TrainingSchool>
              <a
                href="https://generalassemb.ly/blog/tag/web-development-immersive"
                rel="noopener noreferrer"
                target="_blank"
              >
                General Assembly
              </a>
            </TrainingSchool>
            <TrainingProgramName>Web Development Immersive</TrainingProgramName>
            <TrainingDescription>
              Full Stack web development program focusing on ES6 JavaScript,
              Bootstrap, JSON, jQuery, HTML5, CSS3, Ruby, Rails, Node, Express,
              Ember, React.js, MongoDB, Postgress, SQL, GIT, problem-solving,
              planning, modeling, and maintaining applications with client-API
              architectures, as well as software engineering principles
              including design patterns, sorting algorithms, big O notation,
              recursion, and data structures from linked lists to binary trees.
            </TrainingDescription>
            <TrainingDescription>
              This program requires work in teams and independently to build
              functioning sites that solve real- world business problems.
            </TrainingDescription>
          </Program>
        </TrainingContent>
      </TrainingContainer>
    );
  }
}
