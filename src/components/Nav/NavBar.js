import React, { Component } from "react";
import "./NavBar.css";
import { Element, scroller, Link } from "react-scroll";
import MediaQuery from "react-responsive";
import { Dropdown } from "reactstrap";

import {
  NavBarContainer,
  NavLink,
  NavLinkWrapper,
  Hamburger,
  DropdownMenuWrapper,
} from "./NavBarStyles";

class NavBar extends Component {
  state = {
    dropdownOpen: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  smoothScrollHero = () => {
    scroller.scrollTo("Hero", {
      duration: 500,
      delay: 1,
      smooth: true,
    });

    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  smoothScrollAbout = () => {
    scroller.scrollTo("About", {
      duration: 500,
      delay: 1,
      smooth: true,
    });

    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  smoothScrollExperience = () => {
    scroller.scrollTo("Experience", {
      duration: 500,
      delay: 1,
      smooth: true,
    });

    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  smoothScrollContact = () => {
    scroller.scrollTo("Contact", {
      duration: 500,
      delay: 1,
      smooth: true,
    });

    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  render() {
    return (
      <Element name="NavBar">
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          inNavbar={true}
        >
          <NavBarContainer>
            <NavLinkWrapper>
              <MediaQuery minWidth={801}>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="Hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    HOME
                  </Link>
                </NavLink>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    ABOUT
                  </Link>
                </NavLink>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="Experience"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    EXPERIENCE
                  </Link>
                </NavLink>

                <NavLink>
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    CONTACT
                  </Link>
                </NavLink>
              </MediaQuery>
              {/* Hamberger Menu */}
              <MediaQuery maxWidth={800}>
                <Hamburger className="fas fa-bars" onClick={this.toggle} />
                <DropdownMenuWrapper>
                  <NavLink onClick={this.smoothScrollHero}>HOME</NavLink>
                  <NavLink onClick={this.smoothScrollAbout}>ABOUT</NavLink>
                  <NavLink onClick={this.smoothScrollExperience}>
                    EXPERIENCE
                  </NavLink>
                  <NavLink onClick={this.smoothScrollContact}>CONTACT</NavLink>
                </DropdownMenuWrapper>
              </MediaQuery>
            </NavLinkWrapper>
          </NavBarContainer>
        </Dropdown>
      </Element>
    );
  }
}

export default NavBar;
