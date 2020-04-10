import React from 'react';
import styled from 'styled-components';

import StepCounter from '../StepCounter';
import Radio from '../Radio';

import { Container, Title, Button, Header } from './styles';

import arrow from '../../assets/img/arrow.svg';

const StyledRadio = styled(Radio)`
    flex: 1 1 auto;
`;

const Payment = () => (
    <Container>
        <Header>
            <StepCounter steps={3} activeStep={1}></StepCounter>
            <Title>Payment Method</Title>
        </Header>
        <StyledRadio />
        <Button>Next Step <img src={arrow} alt='Payment button icon'/></Button>
    </Container>
);

export default Payment;