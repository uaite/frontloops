import React from 'react';

import { Container, InputField, Button } from './styles';

const Input = () => (
    <Container>
        <InputField type="text" placeholder="Enter your message" />
        <Button>Send</Button>
    </Container>
)

export default Input;