import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import NavBar from './components/NavBar';

const baseStyles = () => injectGlobal`
  ${reset};
  box-sizing: border-box;
`;

class App extends React.Component {
  render() {
    baseStyles();
    return (
        <NavBar />
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)