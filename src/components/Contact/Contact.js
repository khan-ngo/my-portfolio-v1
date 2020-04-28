import React, { Component } from "react";
import { Element } from "react-scroll";
import {
  ContactContainer,
  ContentWrapper,
  ContactHeader,
  ContactSubHeader,
  SocialWrapper,
  Astyle,
} from "./ContactStyles";

import Button from "../Button/Button";

class Contact extends Component {
  render() {
    return (
      <Element name="Contact">
        <ContactContainer>
          <ContentWrapper>
            <ContactHeader>Contact</ContactHeader>

            <SocialWrapper>
              <Astyle
                href="https://www.linkedin.com/in/khanh-ngo-8863193/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </Astyle>

              <Astyle
                href="https://github.com/khan-ngo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Astyle>
              <Astyle
                href="https://twitter.com/khan_ngo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Astyle>
              <Astyle
                href="https://www.instagram.com/kqngo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Astyle>
              <Astyle
                href="https://www.facebook.com/khan.ngo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-facebook" />
              </Astyle>
              <Astyle
                href={`mailto:khan.ngo@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope" />
              </Astyle>
            </SocialWrapper>
            <ContactSubHeader>Get In Touch</ContactSubHeader>
          </ContentWrapper>
          <Button
            name="Say Hello"
            color="#444649"
            border="2px solid #444649"
            hoverFontColor="#fffdff"
            bgColor="#444649"
            borderColor="#444649"
            width="180px"
            fontSize="1.2rem"
            onClick={this.togglePDF}
          />
        </ContactContainer>
      </Element>
    );
  }
}

export default Contact;
