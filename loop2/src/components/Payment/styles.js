import styled from 'styled-components';

export const Container = styled.div`
  background: #f3f3f3;
  border-radius: 4px;
  box-shadow: 0 22px 50px rgba(14,21,47, .2), 0 8px 20px rgba(14,21,47, .2);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 400px;
  height: 350px;
  overflow-y: hidden;
`;
Container.displayName = 'PaymentContainer';

export const Header = styled.div`
    height: 100px;
    padding: 1em;
`;
Header.displayName = 'PaymentHeader';

export const Title = styled.h1`
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-size: 1.3em;
    color: #333;
    text-align: center;
`;
Title.displayName = 'PaymentTitle';

export const Button = styled.button`
    background: #598bdd;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8em;
    color: #fff;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 0 0 4px 4px;
    outline: 0;

    :active {
        background: #3161ad;
        transform: translateY(4px);
    }

    :hover, :focus {
        background: #4075ca;
    }

    > img {
        width: 14px;
        margin-left: 3px;
    }
`;
Button.displayName = 'PaymentButton';
