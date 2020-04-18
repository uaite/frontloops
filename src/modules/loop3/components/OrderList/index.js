import React, { Fragment, useState, useEffect } from 'react';

import { Container, Item, ItemPrice, Total } from './styles';

const OrderList = ({ orders = [] }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const t = orders.reduce((ac, item) => {
            return ac += item.price;
        }, 0);
        setTotal(t)
    }, [orders]);

    const displayOrders = () => (
        orders.map(order => (
            // I chose to implement this component like this as a means of
            // doing more 'display: grid' examples and learning its limitations. 
            // I know it's weird having each list item be composed of two completely 
            // separate elements, and then the 'Total' being something else entirely, 
            // and I wouldn't do this in a real project. :) 
            <Fragment>
                <Item>{order.product || 'default product name'}</Item>
                <ItemPrice>${order.price || 0}</ItemPrice>
            </Fragment>
        ))
    );
    
    return (
        <Container>
            { displayOrders() }
            <Total><span>Total</span>${total}</Total>
        </Container>
        
    );
};

export default OrderList;