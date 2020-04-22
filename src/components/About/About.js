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
          <ContentWrapper>
            <AboutHeader>About</AboutHeader>
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
                          IT Information Library (ITIL) Foundations
                          Certification
                        </li>
                        <li>Splunk Certified Architect 6.3</li>
                        <li>Splunk Certified Admin</li>
                        <li>Splunk Certified Knowledge Manager</li>
                        <li>Splunk Certified Power User</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Education Section */}
                <div>
                  <h4>Training</h4>
                  <div>
                    <div>
                      <a
                        href="https://www.platformbyps.org/boston/application-developer"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Platform by Per Scholas
                      </a>
                    </div>
                    <div>Java Full-Stack Web Developer</div>
                    <div>
                      <strong>Description:</strong> Training covered exploration
                      on how to be efficient in Agile-Scrum project
                      methodologies using Jira. Managed databases requiring SQL
                      and learned how to install, configure, connect, query with
                      MariaDB. Additional topics included collections, basic
                      I/O, JDBC, JPA, and Spring MVC.
                    </div>

                    <div className="edu-institution">
                      <a
                        href="https://generalassemb.ly/blog/tag/web-development-immersive"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        General Assembly
                      </a>
                    </div>
                    <div>Web Development Immersive (WDI) Program</div>
                    <div>
                      <strong>Description:</strong> Full Stack web development
                      program focusing on ES6 JavaScript, Bootstrap, JSON,
                      jQuery, HTML5, CSS3, Ruby, Rails, Node, Express, Ember,
                      React.js, MongoDB, Postgress, SQL, GIT, problem-solving,
                      planning, modeling, and maintaining applications with
                      client-API architectures, as well as software engineering
                      principles including design patterns, sorting algorithms,
                      big O notation, recursion, and data structures from linked
                      lists to binary trees. This program requires work in teams
                      and independently to build functioning sites that solve
                      real- world business problems.
                    </div>
                  </div>
                </div>
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
