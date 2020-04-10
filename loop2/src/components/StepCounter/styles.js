import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.4em;
    color: #dedede;

    > .active {
        color: #aaa; 
    }
`;
Container.displayName = 'StepCounterContainer';

export const Step = styled.span`
    font-size: 1.6em;
    font-weight: 800;
    margin: 2px;
    
    ::after {
        content: "•";
    }
`;