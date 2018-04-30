import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import image1 from '../img/icons/howto.jpg';
import image2 from '../img/icons/newleaf.jpg';
import image3 from '../img/icons/cloudmerch.jpg';

const PortfolioWall = styled.div`
  height: 40%;
  width: 92%;
  position: absolute;
  top: 30%;
  left: 10%;
`;

const Project = styled.a`
  display: inline-block;
  float: left;
  margin: 0 4px;
  padding: 0 2%;
  position: relative;
  height: 100%;
  width: calc(85% / 3);
`;

class Portfolio extends React.Component {
  render() {
    return (
      <PortfolioWall>
        <Project style={{background: `url(${image1}) 50% top/cover`}} href="https://www.google.com"/>
        <Project style={{background: `url(${image2}) 37% top/cover`}} href="https://www.google.com"/>
        <Project style={{background: `url(${image3}) 33% top/cover`}} href="https://www.google.com"/>
      </PortfolioWall>
    );
  }
}

export default Portfolio;
