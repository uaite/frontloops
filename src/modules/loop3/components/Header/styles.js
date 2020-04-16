import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;
Container.displayName = 'HeaderContainer'

export const Title = styled.h1`
    color: #000;
    font-weight: 600;
    letter-spacing: 0.9;
    font-size: 1.5em;
    flex: 1 1 auto;
`;
Title.displayName = 'HeaderTitle';

export const Icon = styled.img`
    border: 1px solid #ddd;
    border-radius: 100%;
    padding: 7px;
    transition: 0.3s ease-in-out;

    :hover {
        box-shadow: 0 0 0 3px #eee;
        transition: 0.3s ease-in-out;
        cursor: pointer;
    }
`;
Icon.displayName = 'HeaderIcon';

export const Description = styled.p`
    width: 100%;
    color: #aaa;
    font-size: 0.9em;
    font-weight: 400;
    margin-top: 10px;
`;
Description.displayName = 'HeaderDescription';
