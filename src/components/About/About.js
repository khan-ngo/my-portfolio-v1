import React, { Component } from "react";
import PDF from "../PDF/PDF";
import Button from "../Button/Button";
import { Element } from "react-scroll";
import Training from "./Training/Training";

import {
  AboutContainer,
  AboutHeaderContainer,
  ContentWrapper,
  AboutHeader,
  BioWrapper,
  BioTextWrapper,
  BioText,
} from "./AboutStyles";

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
            <AboutHeader>About</AboutHeader>
          </AboutHeaderContainer>

          <ContentWrapper>
            <BioWrapper>
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
              </BioTextWrapper>
            </BioWrapper>

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

                <div>
                  <strong>Certifications: &nbsp;</strong>
                  <ul>
                    <li>AWS Certified Cloud Practitioner</li>
                    <li>CompTia A+</li>
                    <li>
                      IT Information Library (ITIL) Foundations Certification
                    </li>
                    <li>Splunk Certified Architect 6.3</li>
                    <li>Splunk Certified Admin</li>
                    <li>Splunk Certified Knowledge Manager</li>
                    <li>Splunk Certified Power User</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Training Section */}

            <Training />
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
          </ContentWrapper>
          <PDF toggle={this.togglePDF} isOpen={this.state.modal} />
        </AboutContainer>
      </Element>
    );
  }
}

export default About;
