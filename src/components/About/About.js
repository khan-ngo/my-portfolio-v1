import React, { Component } from "react";
import PDF from "../PDF/PDF";
import Button from "../Button/Button";
import { Element } from "react-scroll";
import Training from "./Training/Training";
import Certification from "./Certification/Certification";

import {
  AboutContainer,
  AboutHeaderContainer,
  ContentWrapper,
  AboutHeader,
  BioWrapper,
  BioTextWrapper,
  BioText,
  ProfilePic,
} from "./AboutStyles";

import profileImage from "../../assets/headshot-bw.png";

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
          <AboutHeaderContainer>
            <AboutHeader>About Me</AboutHeader>
          </AboutHeaderContainer>

          <ContentWrapper>
            <BioWrapper>
              <ProfilePic src={profileImage} />
              <BioTextWrapper>
                <BioText>
                  Hi! My name is Khanh. I am an IT-Professional with over 20
                  years of experience in Infratructure, Systems, and Application
                  Support for highly visible, public facing Enterprise
                  applications in the Financial, Insurance, and E-commerce
                  industries.
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
            <BioWrapper>
              <BioTextWrapper>
                <BioText />
              </BioTextWrapper>
            </BioWrapper>

            {/* Training Section */}

            <Training />
            <div>
              <h4>Skills</h4>
              <div>
                <div>
                  <strong>Languages: &nbsp;</strong>
                  <span>Java 8, HTML/CSS, JavaScript</span>
                </div>
                <div>
                  <strong>Libraries &amp; Frameworks: &nbsp;</strong>
                  <span>
                    Spring MVC, Spring Boot, JPA, Maven, jQuery, Bootstrap,
                    MongoDB, PostgreSQL, MariaDB, Express, ReactJS
                  </span>
                </div>
                <div>
                  <strong>Tools: &nbsp;</strong>
                  <span>
                    Git, GitHub, bitbucket, Jira, Confluence, Bamboo, CLI,
                    Postman, JMeter, AppDynamics, Splunk, Unix/Linux, bash,
                    Agile
                  </span>
                </div>
              </div>
            </div>

            <Certification />
          </ContentWrapper>
          <PDF toggle={this.togglePDF} isOpen={this.state.modal} />
        </AboutContainer>
      </Element>
    );
  }
}

export default About;
