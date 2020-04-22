import React, { Component } from "react";
import { Element } from "react-scroll";
import Left from "./left";
import Right from "./right";

import {
  ProjectContainer,
  ProjectHeader,
  ContentWrapper,
} from "./ProjectStyles";

class Experience extends Component {
  state = {};

  render() {
    return (
      <Element name="Projects">
        <ProjectContainer>
          <ProjectHeader>Work Experience</ProjectHeader>
        </ProjectContainer>
        <Left />
        <Right />
      </Element>
    );
  }
}

export default Experience;
