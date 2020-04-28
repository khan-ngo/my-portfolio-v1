import React, { Component } from "react";
import PDF from "../../PDF/PDF";
import Button from "../../Button/Button";
import { Element } from "react-scroll";

import {
  AboutContainer,
  ContentWrapper,
  AboutHeader,
  IconContainer,
  Icon,
  IconTextWrapper,
  IconText,
  IconHeader,
} from "./AboutStyles";

class Certification extends Component {
  state = {
    modal: false,
  };

  togglePDF = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <Element name="Certification">
        <AboutContainer>
          <ContentWrapper>
            <AboutHeader>My Certifications</AboutHeader>
            <IconContainer>
              <IconTextWrapper>
                <Icon src="../../../assets/AWS_Cloud_Practitioner.png" />
                <IconHeader>AWS</IconHeader>
                <IconText>Cloud Practitioner</IconText>
              </IconTextWrapper>

              <IconTextWrapper>
                <Icon src="../../../assets/Splunk_Architet.png" />
                <IconHeader>Splunk</IconHeader>
                <IconText>Certified Architect 6.3</IconText>
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon src="../../../assets/Splunk_Admin.png" />
                <IconHeader>Splunk</IconHeader>
                <IconText>Certified Admin</IconText>
              </IconTextWrapper>

              <IconTextWrapper>
                <Icon src="../../../assets/Splunk_knowledge_manager.png" />
                <IconHeader>Splunk</IconHeader>
                <IconText>Knowledge Manager</IconText>
              </IconTextWrapper>

              <IconTextWrapper>
                <Icon src="../../../assets/Splunk_power_user.png" />
                <IconHeader>Splunk</IconHeader>
                <IconText>Certified Power User</IconText>
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon src="../../../assets/Sun_System_Administrator.png" />
                <IconHeader>ITIL</IconHeader>
                <IconText>ITIL Foundations</IconText>
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon src="../../../assets/A_plus.jpg" />
                <IconHeader>CompTia</IconHeader>
                <IconText>CompTia A+</IconText>
              </IconTextWrapper>
            </IconContainer>
          </ContentWrapper>
          <PDF toggle={this.togglePDF} isOpen={this.state.modal} />
        </AboutContainer>
      </Element>
    );
  }
}

export default Certification;
