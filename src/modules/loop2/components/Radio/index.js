import React from 'react';

import { Container, Option } from './styles';

import visa from '../../assets/img/visa.svg';
import mastercard from '../../assets/img/mastercard.svg';
import maestro from '../../assets/img/maestro.svg';

let id = 0;

const Radio = () => {
    
    return (
        <Container>
            <Option>
                <input type="radio" id="optionVisa" name={`radio-${id}`} value="Visa" />
                <span>Visa</span>
                <img src={visa} alt="Visa brand logo"/>
            </Option>

            <Option>
                <input type="radio" id="optionMastercard" name={`radio-${id}`} value="MasterCard" />
                <span>MasterCard</span>
                <img src={mastercard} alt="MasterCard brand logo"/>
            </Option>

            <Option>
                <input type="radio" id="optionMaestro" name={`radio-${id}`} value="Maestro" />
                <span>Maestro</span>
                <img src={maestro} alt="Maestro brand logo"/>
            </Option>
        </Container> 
    );
};

export default Radio;