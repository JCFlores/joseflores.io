import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const SiteHeader = styled.header`
  position: relative;
  padding: 3rem;
  width: auto;
  z-index: -1;
  color: #2c2c2c;
  font-size: 36px;
  text-align: center;
  box-shadow: 0px 0px 20px 0px;
`;

const Header = (props) => (
      <SiteHeader>{props.title}</SiteHeader>  
);

export default Header;
