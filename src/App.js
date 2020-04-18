import React, { useState } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import modules from './modules';

import twitter from './assets/twitter.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';

const Navbar = styled.nav`
  height: 40px;
  background-color: rgba(30, 30, 30, 0.7);
  color: #f0f0f0;
  backdrop-filter: blur(4px);
  display: grid;
  grid: [row1-start] "logo sections contact" 1fr [row1-end] 
        / 200px 1fr 200px;
  place-items: center center;
`;
Navbar.displayName = 'Navbar';

const NavbarTitle = styled.a`
  color: #f0f0f0;
  font-weight: 600;
  grid-area: logo;
  letter-spacing: 0.1em;
  font-size: 1.2em;
`;
NavbarTitle.displayName = NavbarTitle;

const NavbarLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  grid-area: sections;
  display: flex;
`;
NavbarLinks.displayName = 'NavbarLinks'

const NavbarLink = styled.li`
  margin: 0 6px;
`;
NavbarLink.displayName = 'NavbarLink';

const NavbarSocial = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
NavbarSocial.displayName = 'NavbarSocial'; 

const NavbarSocialIcon = styled.a.attrs(props => ({
  target: "_blank",
  tabIndex: 0,
}))`
  grid-area: contact;

  > img {
    width: 20px;
  }
`;
NavbarSocialIcon.displayName = 'NavbarSocialIcon';

const App = () => {
  const [currentTab, setCurrentTab] = useState('');

  return (
      <Router>
          <Navbar className="App-header">
            <NavbarTitle>
              <Link to='/' onClick={() => setCurrentTab('/')}>Frontloops</Link>
            </NavbarTitle>
            <NavbarLinks className="App-nav">
              {modules.map(module => (
                  <NavbarLink key={module.name} className={currentTab === module.name ? 'active' : ''}>
                    <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
                  </NavbarLink>
              ))}
            </NavbarLinks>
            <NavbarSocial>
              <NavbarSocialIcon href="https://twitter.com/_uaite"><img src={twitter} alt="Twitter"></img></NavbarSocialIcon>
              <NavbarSocialIcon href="https://github.com/uaite"><img src={github} alt="GitHub"></img></NavbarSocialIcon>
              <NavbarSocialIcon href="https://linkedin.com/in/eduardotimmers"><img src={linkedin} alt="LinkedIn"></img></NavbarSocialIcon>
            </NavbarSocial>
          </Navbar>

          <div>
            {modules.map(module => (
              <Route {...module.routeProps} key={module.name} />
            ))}
          </div>
      </Router>
  );
}

export default App;