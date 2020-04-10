import React from 'react';

import Price from '../Price';

import { Container, Title, Description } from './styles'

const Tile = ({ icon, title, description, currency, value, period, height }) => (
    <Container height={height}>
        <img src={icon} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price currency={currency} value={value} period={period}/>
    </Container>
);

export default Tile;