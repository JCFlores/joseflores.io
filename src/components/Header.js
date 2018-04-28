import React from "react";
import ReactDOM from "react-dom";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import envelope from "@fortawesome/fontawesome-free-solid";
import styled from "styled-components";

const MainHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Brand = styled.h1`
  font-size: 30px;
  display: inline-block;
  vertical-align: middle;
`;

const MainNav = styled.nav`
  background-color: #d75656;
  display: inline-block;
  padding: 1%;
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

class Header extends React.Component {
  render() {
    return (
        <MainHeader>
          <MainNav>
            <NavUl>
              <NavItem href="https://www.twitter.com/joseflores_io">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="4x" />
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={["fab", "github"]} size="4x" />
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="4x" />
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={["fas", "envelope"]} size="4x" />
              </NavItem>
            </NavUl>
          </MainNav>
        </MainHeader>
    );
  }
}

export default Header;
