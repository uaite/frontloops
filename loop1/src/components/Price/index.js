import React from 'react';
import { Currency, Value, Period } from './styles.js';

const Price = ({ currency, value, period }) => (
    <div style={{color: '#4e63d2'}}>
        <Currency>{currency}</Currency>
        <Value>{value}</Value>
        <Period> / {period}</Period>
    </div>
)

export default Price;