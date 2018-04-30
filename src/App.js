import React from "react";
import ReactDOM from "react-dom";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Router from "./components/Router";
import img from "./img/slice1.jpg";

const baseStyles = () => injectGlobal`
  ${reset};
  html, body, #root, #main {
    height: 100%;
  };
`;

const Container = styled.div`
  height: 100%;
  text-align: center;
`;

const Content = styled.div`
  position fixed;
  background: url(${img}) no-repeat;
  background-size: cover;
  background-position: 0% 0%;
  height: 100%;
  width: 100%;
`;

const ContentArea = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  float: left;
`;

class App extends React.Component {
  state = {
    title: "joseflores.io"
  };

  render() {
    baseStyles();
    return (
      <div id="main">
        <Container>
          <NavBar />
          <ContentArea>
            <Content>
              <Router />
            </Content>
          </ContentArea>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
