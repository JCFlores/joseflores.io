import React from "react";
import ReactDOM from "react-dom";
import styled, {injectGlobal} from "styled-components";
import reset from "styled-reset";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Router from "./components/Router";

const baseStyles = () => injectGlobal`
  ${reset};
  html, body, #root, #main {
    height: 100%;
  };
`;

const ContentArea = styled.div`
  height: 100%;
  width: 85%;
  position: relative;
  float: left;
`;

class App extends React.Component {
  state = {
    title: "joseflores.io",
  };

  render() {
    baseStyles();
    return (
      <div id="main">
        <NavBar />
        <ContentArea >
          <Header title={this.state.title} />
          <Router />
        </ContentArea>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
