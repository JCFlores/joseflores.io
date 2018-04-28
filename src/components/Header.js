import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const NavBar = styled.header`
  margin: 0;
  background-color: #D75656;
  width: 100%;
`;

class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <h1>Jose Flores</h1>
        </NavBar>
      </div>
    );
  }
}

export default Header;