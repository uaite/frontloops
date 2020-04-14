import styled from 'styled-components';

import bike from '../../assets/img/bicycle.png';

export const Container = styled.div`
    width: 600px;
    height: 500px;
    border-radius: 4px;
    padding: 40px 60px;
    background-image: url(${bike});
    background-position: center bottom -150px;
    background-color: #fff;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0 22px 50px rgba(14,21,47, .2), 0 8px 20px rgba(14,21,47, .2);
`;
Container.displayName = 'OrderContainer';