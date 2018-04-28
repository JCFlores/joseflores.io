import React from "react";
import ReactDOM from "react-dom";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import envelope from "@fortawesome/fontawesome-free-solid";
import styled from "styled-components";

const BrandNav = styled.nav`
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

const Brand = styled.h1`
  font-size: 30px;
  display: inline-block;
  vertical-align: middle;
`;

const BrandUl = styled.ul`
  text-align: center;
`;

const BrandItem = styled.a`
  display: inline-block;
  margin: 0px 16px;
  cursor: pointer;
  color: #222;
`;

class NavBar extends React.Component {
  render() {
    return (
          <BrandNav>
            <BrandUl>
              <BrandItem href="https://www.twitter.com/joseflores_io">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="8x" />
              </BrandItem>
              <BrandItem href="https://www.github.com/JCFlores">
                <FontAwesomeIcon icon={["fab", "github"]} size="8x" />
              </BrandItem>
              <BrandItem href="#">
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="8x" />
              </BrandItem>
              <BrandItem href="#">
                <FontAwesomeIcon icon={["fas", "envelope"]} size="8x" />
              </BrandItem>
            </BrandUl>
          </BrandNav>
    );
  }
}

export default NavBar;
