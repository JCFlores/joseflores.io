import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from './components/ProfileCard';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import Header from './components/Header';

const baseStyles = () => injectGlobal`
  ${reset};
  box-sizing: border-box;
`;

class App extends React.Component {
  render() {
    baseStyles();
    return (
        <Header />
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)