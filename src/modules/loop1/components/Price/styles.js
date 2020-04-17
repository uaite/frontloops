import styled from 'styled-components';

export const Currency = styled.span`
    font-size: 1em;
    vertical-align: 0.7em;
    font-weight: 700;
`;

export const Value = styled.span`
    font-size: 2em;
    font-weight: 600;
`;
Value.displayName = 'PriceValue';

export const Period = styled.span`
    font-size: 1em;
    vertical-align: bottom;
`;
Period.displayName = 'PricePeriod';