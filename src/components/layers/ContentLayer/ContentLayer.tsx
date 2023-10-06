import React from 'react';
import styled from 'styled-components';

const ContentLayer = () => {
  return (
    <StyledContentLayer>
      <h1>Content Layer</h1>
    </StyledContentLayer>
  );
};

const StyledContentLayer = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
  position: fixed;
  z-index: 0;
`

export default ContentLayer;