import React from 'react';
import styled from 'styled-components';

import Chat from './components/Chat';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100vw;
  height: 100vh;
  padding: 10vmax;
`;
AppContainer.displayName = 'AppContainer';

const App = () => {
  return (
    <AppContainer>
      <Chat></Chat>
    </AppContainer>
  );
}

export default {
  routeProps: {
      path: '/loop4',
      component: App,
  },
  name: 'Loop 4',
};
