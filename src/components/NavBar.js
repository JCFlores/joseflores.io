import React from "react";
import ReactDOM from "react-dom";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #d75656;
  height: auto;
  min-height: 100vh;
  display: inline-block;
  padding: 1%;
  width: 4rem;
  position: fixed;
  top: 0;
  left: 0;
`;

const Title = styled.h1`
  font-size: 30px;
  display: inline-block;
  vertical-align: middle;
`;

const NavUl = styled.ul`
  text-align: center;
`;

const NavItem = styled.a`
  display: inline-block;
  margin: 0px 16px;
  cursor: pointer;
  color: #222;
`;

class NavBar extends React.Component {
  render() {
    return (
          <Nav>
            <NavUl>
              <NavItem href="https://www.twitter.com/joseflores_io">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="8x" />
              </NavItem>
              <NavItem href="https://www.github.com/JCFlores">
                <FontAwesomeIcon icon={["fab", "github"]} size="8x" />
              </NavItem>
              <NavItem href="#">
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="8x" />
              </NavItem>
              <NavItem href="#">
                <FontAwesomeIcon icon={["fas", "envelope"]} size="8x" />
              </NavItem>
              <NavItem href="#">
                <FontAwesomeIcon icon={["far", "id-card"]} size="8x" />
              </NavItem>
              <NavItem href="#">
                <FontAwesomeIcon icon={["far", "file-code"]} size="8x" />
              </NavItem>
            </NavUl>
          </Nav>
    );
  }
}

export default NavBar;
