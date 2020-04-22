import React, { Component } from "react";
import { Element } from "react-scroll";
import Right from "./right";

import {
  ProjectContainer,
  ProjectHeader,
  ContentWrapper,
} from "./ExperienceStyles";

class Experience extends Component {
  state = {};

  render() {
    return (
      <Element name="Projects">
        <ProjectContainer>
          <ProjectHeader>Work Experience</ProjectHeader>
        </ProjectContainer>

        <ContentWrapper>
          <Right />
        </ContentWrapper>
      </Element>
    );
  }
}

export default Experience;
