import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from './components/ProfileCard';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import Header from './components/Header';

const baseStyles = () => injectGlobal`
  ${reset}
`;

class App extends React.Component {
  render() {
    baseStyles();
    return (
      <div>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)