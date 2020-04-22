import React, { Component } from "react";
import { Element } from "react-scroll";

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

          <ContentWrapper />
        </ProjectContainer>
      </Element>
    );
  }
}

export default Experience;
