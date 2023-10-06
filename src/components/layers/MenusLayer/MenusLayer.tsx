import React from 'react';
import styled from 'styled-components';

import NavMenu from '../../menus/NavMenu/NavMenu';
import ToolboxMenu from '../../menus/ToolboxMenu/ToolboxMenu';

const MenusLayer = () => {
  return (
    <StyledMenusLayer>
      <NavMenu />
      <ToolboxMenu />
    </StyledMenusLayer>
  );
};

const StyledMenusLayer = styled.div`
  background-color: green;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 0;
  overflow: visible;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
`

export default MenusLayer;