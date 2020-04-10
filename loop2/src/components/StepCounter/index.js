import React from 'react';

import { Container, Step } from './styles';

const StepCounter = ({ steps, activeStep }) => {
    return (
        <Container>
            {[...Array(steps).keys()].map(i => <Step className={activeStep - 1 === i ? 'active' : ''}/>)}
        </Container>
    );
};

export default StepCounter;