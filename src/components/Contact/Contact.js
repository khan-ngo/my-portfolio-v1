import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { Element } from "react-scroll";
import {
  ContactContainer,
  ContentWrapper,
  ContactHeader,
  ContactSubHeader,
  ContactForm,
  ButtonWrapper,
  SocialWrapper,
  Astyle,
  CopyrightText,
} from "./ContactStyles";

import Button from "../Button/Button";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  state = {
    subject: "Email from github profile page",
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state;
    const valid =
      name.length > 0 &&
      email.length > 0 &&
      email.includes("@") &&
      email.includes(".") &&
      message.length > 0;

    if (valid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state }),
      })
        .then(() =>
          alert(
            `Hey! Thanks for contacting me. I'll get back to you soon as I can.`
          )
        )
        .catch((error) =>
          alert(
            `Oops! Something went wrong. Contact me at khan.ngo@gmail.com .`
          )
        );

      this.setState({ name: "", email: "", message: "" });
    } else if (name.length <= 0) {
      alert("Please enter your name.");
    } else if (email.length <= 0) {
      alert("Please enter your email address.");
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } else if (message.length <= 0) {
      alert("Please enter your message.");
    }
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

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

            {/* <ContactSubHeader>What on your mind ?</ContactSubHeader>
            <ContactForm>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    bsSize="lg"
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    bsSize="lg"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="message"
                    value={message}
                    placeholder="Message"
                    bsSize="lg"
                    style={{ height: "200px" }}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Form>
            </ContactForm>
            <ButtonWrapper>
              <Button
                name="Send Message"
                color="#c0c0c0"
                border="2px solid #c0c0c0"
                bgColor="#9d967c"
                hoverFontColor="#182327"
                borderColor="#9d967c"
                width="180px"
                fontSize="1.2rem"
                onClick={this.handleSubmit}
              />
            </ButtonWrapper> */}
          </ContentWrapper>
        </ContactContainer>
      </Element>
    );
  }
}

export default Contact;
