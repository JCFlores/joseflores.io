import React from "react";
import ReactDOM from "react-dom";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";
import styled from "styled-components";

const Nav = styled.section`
  height: 100%;
  width: 10%;
  position: fixed;
  z-index: 2;
  display: block;
  float: left;
  background-color: #5d5d5d;
  box-shadow: 0px 0px 25px 1px;
`;

const NavUl = styled.nav`
  position: absolute;
  text-align: center;
  height: 100%;
  width: 100%;
`;

const NavItem = styled.a`
  display: block;
  padding-top: 8%;
  cursor: pointer;
  color: #2c2c2c;
  height: 15%;
`;

class NavBar extends React.Component {
  render() {
    return (
      <Nav>
        <NavUl>
          <NavItem href="/">
            <FontAwesomeIcon style={{color: '#2d2d2d'}} icon={["far", "id-card"]} size="5x" />
          </NavItem>
          <NavItem href="/portfolio">
            <FontAwesomeIcon style={{color: '#2d2d2d'}} icon={["far", "file-code"]} size="5x" />
          </NavItem>
          <NavItem href="https://www.github.com/JCFlores">
            <FontAwesomeIcon style={{color: '#2d2d2d'}} icon={["fab", "github"]} size="5x" />
          </NavItem>
          <NavItem href="https://www.linkedin.com/in/jose-c-flores/">
            <FontAwesomeIcon style={{color: '#2d2d2d'}} icon={["fab", "linkedin"]} size="5x" />
          </NavItem>
          <NavItem href="https://www.twitter.com/joseflores_io">
            <FontAwesomeIcon style={{color: '#2d2d2d'}} icon={["fab", "twitter"]} size="6x" />
          </NavItem>
        </NavUl>
      </Nav>
    );
  }
}

export default NavBar;
