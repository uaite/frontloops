import React from 'react';
import styled from 'styled-components';

import Payment from './components/Payment';

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
      <Payment></Payment>
    </AppContainer>
  );
}

export default App;
