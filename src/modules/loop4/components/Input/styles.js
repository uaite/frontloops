import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
    border-top: 1px solid #ddd;
    padding: 0 6px;
`;
Container.displayName = 'InputContainer';

export const InputField = styled.input`
    flex: 1 1 auto;
    border: 0;
    outline: 0;
`;
InputField.displayName = 'InputField';

export const Button = styled.button`
    width: 60px;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    font-size: 0.8em;
    font-weight: 800;
    color: #6895da;
    letter-spacing: 1px;
    text-transform: uppercase;
`;
Button.displayName = 'InputButton';