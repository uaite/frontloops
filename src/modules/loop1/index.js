import React from 'react';
import styled from 'styled-components';

import Tile from './components/Tile';

import device from './assets/img/device.svg';
import laptop from './assets/img/laptop.svg';
import monitor from './assets/img/monitor.svg';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100vw;
  height: 100vh;
  padding: 10vmax;
`;
AppContainer.displayName = 'AppContainer';

const TileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  border-radius: 4px;
  padding: 1em;
  background: #f3f3f3;
  box-shadow: 0 22px 50px rgba(14,21,47, .2), 0 8px 20px rgba(14,21,47, .2);
`
TileContainer.displayName = 'TileContainer';

const tileHeight = '45vh';

const App = () => {
  return (
    <AppContainer>
      <TileContainer>
      <Tile
        icon={device}
        title="mobile" 
        description="Get notifications about new releases in our new mobile app." 
        currency="$" 
        value="10" 
        period="month"
        height={tileHeight}
      />
      <Tile 
        icon={laptop}
        title="desktop" 
        description="Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms." 
        currency="$" 
        value="10" 
        period="month"
        height={tileHeight}
      />
      <Tile 
        icon={monitor}
        title="tv" 
        description="Watch your favorite series at home on large screen with our TV application." 
        currency="$" 
        value="10" 
        period="month"
        height={tileHeight}
      />
      </TileContainer>
    </AppContainer>
  );
}

export default {
    routeProps: {
        path: '/loop1',
        component: App,
    },
    name: 'Loop 1',
};
