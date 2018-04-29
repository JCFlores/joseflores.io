import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const SiteHeader = styled.header`
  display: block;
  position: fixed;
  padding: 2rem;
  width: 100%;
  font-size: 34px;
  box-shadow: 0px 0px 20px 0px;
  background-color: #2c2c2c;
  color: #afafaf;
  margin-left: 2em;
  z-index: 1;
`;

const Header = (props) => (
      <SiteHeader>{props.title}</SiteHeader>  
);

export default Header;
