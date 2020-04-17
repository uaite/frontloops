import React from 'react';

import MessageBubble from '../MessageBubble';
import DateSeparator from '../DateSeparator';

import { Container } from './styles';

const Messages = () => (
    <Container>
        <DateSeparator date="today"/>
        <MessageBubble type="sent" time="10:53">
            Hi, Mark! I made a new design for Messenger App.
        </MessageBubble>

        <MessageBubble type="received" time="10:53">
            Yo! Send it to my assistant and we'll review it during the year.
        </MessageBubble>

        <MessageBubble type="sent" time="10:53">
            But Mark...
        </MessageBubble>

        <MessageBubble type="system" time="10:53">
            You were blocked by the user.
        </MessageBubble>
    </Container>
);

export default Messages;