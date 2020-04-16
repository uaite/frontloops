import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-auto-flow: row;
    gap: 30px 0;
    margin: 50px 0;
    overflow-y: auto;
`;
Container.displayName = 'OrderListContainer';

export const Item = styled.span`
    justify-self: start;
    color: #666;
`;
Item.displayName = 'OrderListItem';

export const ItemPrice = styled.span`
    justify-self: end;
    color: #000;
    font-weight: 600;
    font-size: 1.2em;
`;
ItemPrice.displayName = 'OrderListItemPrice';

export const Total = styled(ItemPrice)`
    grid-column-end: span 2;
    display: flex;
    justify-content: space-between;
    width: 100%;

    > span {
        text-transform: uppercase;
        color: #666;
    }
`;
Total.displayName = 'OrderListTotal';