import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    display: flex;
    flex-flow: nowrap;
    justify-content: space-between;
    align-items: center;
    
    span {
        padding: 1em;
        text-transform: uppercase;
        color: #ddd;
        font-size: 0.7em;
        font-weight: 700;
    }
  
    &::before, 
    &::after {
        flex: 1 1 auto;
        content: "";
        height: 0px;
        border-bottom: 1px solid #ddd;
    }
`

const DateSeparator = ({ date }) => (
    <Wrapper>
        <span>{date}</span>
    </Wrapper>
);

export default DateSeparator;