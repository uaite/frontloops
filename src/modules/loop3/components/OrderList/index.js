import React, { useState, useEffect } from 'react';

import { Container, Item, ItemPrice, Total } from './styles';

const OrderList = ({ orders = [] }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const t = orders.reduce((ac, item) => {
            console.log('reducing', item, ac);
            return ac += item.price;
        }, 0);
        setTotal(t)
    }, [orders]);

    const displayOrder = (order) => {
        return (
            <>
                <Item>{order.product || 'default product name'}</Item>
                <ItemPrice>${order.price || 0}</ItemPrice>
            </>
        );
    };
    
    return (
        // I chose to implement this component like this as a means of
        // doing more 'display: grid' examples and learning its limitations. 
        // I know it's weird having each list item be composed of two completely 
        // separate elements, and then the 'Total' being something else entirely, 
        // and I wouldn't do this in a real project. :) 
        <Container>
            { orders.map(order => displayOrder(order)) }
            <Total><span>Total</span>${total}</Total>
        </Container>
        
    );
};

export default OrderList;