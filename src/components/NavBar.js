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
  width: 13rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #CC6666;
  border-right: 2px solid #222;
  box-shadow: 0px 5px 20px 5px;
`;

const NavUl = styled.nav`
  position: relative;
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
            <FontAwesomeIcon icon={["far", "id-card"]} size="7x" />
          </NavItem>
          <NavItem href="/portfolio">
            <FontAwesomeIcon icon={["far", "file-code"]} size="7x" />
          </NavItem>
          <NavItem href="/contact">
            <FontAwesomeIcon icon={["fas", "envelope"]} size="7x" />
          </NavItem>
          <NavItem href="https://www.github.com/JCFlores">
            <FontAwesomeIcon icon={["fab", "github"]} size="7x" />
          </NavItem>
          <NavItem href="https://www.linkedin.com/in/jose-c-flores/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="7x" />
          </NavItem>
          <NavItem href="https://www.twitter.com/joseflores_io">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="7x" />
          </NavItem>
        </NavUl>
      </Nav>
    );
  }
}

export default NavBar;
