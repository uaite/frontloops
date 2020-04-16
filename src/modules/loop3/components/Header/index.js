import React from 'react';

import { Container, Title, Icon, Description } from './styles';

import account from '../../assets/img/account.svg';

const Header = () => (
    <Container>
        <Title>SimpleWheels</Title>
        <Icon src={account} alt="User account icon"/>
        <Description>Thanks for you order #2357654, your package will be on its way shortly.</Description>
    </Container>
)

export default Header;