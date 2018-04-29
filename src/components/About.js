import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import img from "../img/wood-laptop.jpg";

const Container = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  1px solid black;
`;

const Content = styled.div`
  background: url(${img}) left 10% top/cover no-repeat;
  background-position: cover;
  height: 100%;
  width: 100%;
`;

class AboutMe extends React.Component {
  render() {
    return (
      <Container>
        <Content />
      </Container>
    );
  }
}

export default AboutMe;
