import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  1px solid black;
`;

const Hh1 = styled.h1`
  border: 1px solid black;
  height: auto;
  width: auto;
  vertical-align: middle;
`;

class AboutMe extends React.Component {
  render() {
    return (
      <Container>
        <Hh1>About Me</Hh1>
      </Container>
    );
  }
}

export default AboutMe;
