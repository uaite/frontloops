import React from 'react';

import { Container, Time, Text } from './styles';

const MessageBubble = ({ type, time, children }) => (
    <Container type={type}>
        <Time>{time}</Time>
        <Text type={type}>{children}</Text>
    </Container>
);

export default MessageBubble;