import React from 'react';

import Input from '../Input';
import Messages from '../Messages';

import { Container, Header, Body } from './styles';

import close from '../../assets/img/close.svg';

const Chat = () => (
    <Container>
        <Header>
            <span>Mark Zuckerberg</span>
            <img src={close} alt="Close chat"></img>
        </Header>
        <Body>
            <Messages />
            <Input />
        </Body>
    </Container>
);

export default Chat;