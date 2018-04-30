import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Sticky from "./Sticky";
import selfie from "../img/selfie.jpg";

const AboutSection = styled.div`
  height: 90%;
  width: 70%;
  position: absolute;
  top: 5%
  left: 15%
`;

const ProfilePic = styled.div`
  background: url(${selfie}) left 25% top/cover no-repeat;
  position: relative;
  display: inline-block;
  height: 20em;
  width: 100%;
`;

const PictureBorder = styled.div`
  background: #fff;
  box-shadow: 4px 5px 18px 0px;  
  float: left;  
  width: 19em;
  padding: 1% 1%;
`;

class AboutMe extends React.Component {
  render() {
    return (
      <AboutSection>
        <PictureBorder>
          <ProfilePic />
        </PictureBorder>
        <Sticky
          style={{ top: '1%', left: '30%' }}
          title={"Welcome to my page"}
          content={"Take a look around. Hope you like what you see. FYI.. This page was made with React.js. This sticky is actually a React component. Pretty cool right!?!?"}
        />
        <Sticky 
          style={{ bottom: '7%', left: '0%' }} 
          title={"About Me ..."} 
          content={"lorem"}
        />
        <Sticky
          style={{ bottom: '0%', right: '-5%' }}
          title={"Want to get in contact?"}
          content={"You can find me on Twitter or LinkedIn where I try to keep up with some of my favorite Web Developers on the latest tech. You can also take a look at my code on Github, to see what I'm working on now"}
        />
        <Sticky
          style={{ top: '32%', right: '31%' }}
          title={"Check out some of my work"}
          content={"If you want to see some more of my stuff just click the file icon on the left. I've made some fun projects with React, MongoDB, Express, and Node."}
        />
      </AboutSection>
    );
  }
}

export default AboutMe;
