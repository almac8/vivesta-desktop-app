import React from 'react';
import styled from 'styled-components';

const NavMenu = () => {
  return (
    <StyledNavMenu>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
      <p>Item 4</p>
    </StyledNavMenu>
  );
};

const StyledNavMenu = styled.div`
  background-color: pink;
  width: 16vw;
  height: 100vh;
`

export default NavMenu;