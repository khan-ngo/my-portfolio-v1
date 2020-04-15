import React, { Component } from "react";
import PDF from "../PDF/PDF";
import Button from "../Button/Button";
import { Element } from "react-scroll";

import {
  AboutContainer,
  ContentWrapper,
  AboutHeader,
  BioWrapper,
  BioTextWrapper,
  ProfilePic,
  BioText,
} from "./AboutStyles";

import profileImage from "../../assets/headshot.png";

class About extends Component {
  state = {
    modal: false,
  };

  togglePDF = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <Element name="About">
        <AboutContainer>
          <ContentWrapper>
            <AboutHeader>About</AboutHeader>
            <BioWrapper>
              <ProfilePic src={profileImage} />
              <BioTextWrapper>
                <BioText>
                  I am an IT-Professional with over 20 years of experience in
                  Infratructure, Systems, and Application Support for highly
                  visible, public facing Enterprise applications in the
                  Financial, Insurance, and E-commerce industries.
                </BioText>
                <BioText>
                  I have the skills, training ,and experience needed to help
                  develop, support, and maintain software programs.
                </BioText>
                <Button
                  name="View Resume"
                  color="#444649"
                  border="2px solid #444649"
                  hoverFontColor="#fffdff"
                  bgColor="#444649"
                  borderColor="#444649"
                  width="180px"
                  fontSize="1.2rem"
                  onClick={this.togglePDF}
                />
              </BioTextWrapper>
            </BioWrapper>
          </ContentWrapper>
          <PDF toggle={this.togglePDF} isOpen={this.state.modal} />
        </AboutContainer>
      </Element>
    );
  }
}

export default About;
