import React, { Component } from "react";
import { Element } from "react-scroll";
import {
  ContactContainer,
  ContactHeaderContainer,
  ContentWrapper,
  ContactHeader,
  ContactContent,
  SocialWrapper,
  Astyle,
  ButtonWrapper,
} from "./ContactStyles";

import Button from "../Button/Button";

class Contact extends Component {
  sayHello = (e) => {
    e.preventDefault();
    window.open(
      "mailto:khan.ngo@gmail.com?subject=A message from Portolio Web"
    );
  };

  render() {
    return (
      <Element name="Contact">
        <ContactContainer>
          <ContentWrapper>
            <ContactHeaderContainer>
              <ContactHeader>Contact Me</ContactHeader>
            </ContactHeaderContainer>
            <ContactContent>
              Get in touch with me via any of the below platforms.
            </ContactContent>
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
            <ContactContent>
              My inbox is always open. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </ContactContent>
            <ButtonWrapper>
              <Button
                name="Say Hello"
                color="#9d967c"
                border="2px solid #9d967c"
                hoverFontColor="#fffdff"
                bgColor="#444649"
                borderColor="#9d967c"
                width="200px"
                fontSize="1.5rem"
                onClick={this.sayHello}
              />
            </ButtonWrapper>
          </ContentWrapper>
        </ContactContainer>
      </Element>
    );
  }
}

export default Contact;
