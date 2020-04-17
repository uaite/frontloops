import React from 'react';

import Header from '../Header';
import OrderList from '../OrderList';

import { Container } from './styles';

const allOrders = [
    { product: 'Chapelli Vintage Single Speed', price: 317 },
    { product: 'Castelli Arenberg Gel Gloves', price: 39 },
];

const Orders = () => (
    <Container>
        <Header />
        <OrderList orders={allOrders}/>
    </Container>
);
export default Orders;