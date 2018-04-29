import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Router from "./components/Router";

const baseStyles = () => injectGlobal`
  ${reset};
`;

class App extends React.Component {
  state = {
    title: "joseflores.io"
  };

  render() {
    baseStyles();
    return (
      <div>
        <NavBar />
        <Header title={this.state.title} />
        <Router />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
