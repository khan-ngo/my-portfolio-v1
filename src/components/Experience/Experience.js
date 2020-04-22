import React, { Component } from "react";
import { Element } from "react-scroll";
import Right from "./right";

import {
  ExperienceContainer,
  ExperienceHeaderContainer,
  ExperienceHeader,
  ContentWrapper,
} from "./ExperienceStyles";

class Experience extends Component {
  state = {};

  render() {
    return (
      <Element name="Experience">
        <ExperienceContainer>
          <ExperienceHeaderContainer>
            <ExperienceHeader>Work Experience</ExperienceHeader>
          </ExperienceHeaderContainer>

          <ContentWrapper>
            <Right />
          </ContentWrapper>
        </ExperienceContainer>
      </Element>
    );
  }
}

export default Experience;
