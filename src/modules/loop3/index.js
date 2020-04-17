import React from 'react';
import styled from 'styled-components';

import Order from './components/Order';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10vmax;
`;
AppContainer.displayName = 'AppContainer';

const App = () => (
  <AppContainer>
    <Order />
  </AppContainer>
);

export default {
  routeProps: {
      path: '/loop3',
      component: App,
  },
  name: 'Loop 3',
};
