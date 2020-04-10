import React from 'react';

import { Container } from './styles';

let id = 0;

const Radio = () => {
    
    return (
        <Container>
            <input type="radio" id="optionVisa" name={`radio-${id}`} value="Visa" checked />
            <label for="optionVisa">Visa</label>

            <input type="radio" id="optionMastercard" name={`radio-${id}`} value="MasterCard" />
            <label for="optionMastercard">MasterCard</label>

            <input type="radio" id="optionMaestro" name={`radio-${id}`} value="Maestro" />
            <label for="optionMaestro">Maestro</label> 
        </Container> 
    );
};

export default Radio;