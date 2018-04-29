import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const SiteHeader = styled.header`
  position: relative;
  padding: 3rem;
  width: auto;
  background-color: #fff;
  z-index: -1;
  color: #222;
  font-size: 36px;
  text-align: center;
`;

class Header extends React.Component {
  render() {
    return <SiteHeader>{this.props.title}</SiteHeader>;
  }
}

export default Header;