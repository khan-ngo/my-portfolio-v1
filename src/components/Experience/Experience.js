import React, { Component } from "react";
import { Element } from "react-scroll";
import Right from "./right";

import {
  ExperienceContainer,
  ExperienceHeader,
  ContentWrapper,
} from "./ExperienceStyles";

class Experience extends Component {
  state = {};

  render() {
    return (
      <Element name="Experience">
        <ExperienceContainer>
          <ExperienceHeader>Work Experience</ExperienceHeader>
        </ExperienceContainer>

        <ContentWrapper>
          <Right />
        </ContentWrapper>
      </Element>
    );
  }
}

export default Experience;
