import React from 'react';
import styled from 'styled-components';

import ContentLayer from '../layers/ContentLayer/ContentLayer';
import MenusLayer from '../layers/MenusLayer/MenusLayer';

const Main = () => {
  return (
    <MainLayout>
      <ContentLayer />
      <MenusLayer />
    </MainLayout>
  );
};

const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`

export default Main;