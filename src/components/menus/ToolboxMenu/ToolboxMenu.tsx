import React from 'react';
import styled from 'styled-components';

const ToolboxMenu = () => {
  return (
    <StyledToolboxMenu>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
      <p>Item 4</p>
    </StyledToolboxMenu>
  )
}

const StyledToolboxMenu = styled.div`
  background-color: lime;
  width: 16vw;
  height: 100vh;
`

export default ToolboxMenu;