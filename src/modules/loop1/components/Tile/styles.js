import styled from 'styled-components';

export const Container = styled.div`
    background: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: ${props => props.height};
    padding: 1em 2em;
    justify-self: center;
    border-radius: 4px;
    cursor: pointer;

    > img {
        width: auto;
        height: 80px;
    }

    :hover {
        transition: 0.3s;
        background: #dfdfdf;
    }
`;
Container.displayName = 'TileContainer';

export const Title = styled.h1`
    font-size: 1.2em
    color: purple;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 800;
    color: #4e63d2;
    margin: 2em 0 0 0;
`;
Title.displayName = 'TileTitle';

export const Description = styled.p`
    text-align: center;
    color: #666;
    font-size: 0.8em;
    height: calc(1.2 * 4em)
`;
Description.displayName = 'TileDescription';