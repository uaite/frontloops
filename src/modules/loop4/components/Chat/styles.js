import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    height: 500px;
    background: #fff;
    display: flex;
    flex-direction: column;
`;
Container.displayName = 'ChatContainer';

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background: #6895da;
    padding: 0 16px;

    > span {
        font-size: 0.9em;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #fff;
        text-align: center;

        ::before {
            content: '•';
            margin-right: 6px;
            font-size: 1em;
            text-align: center;
        }
    }

    > img {
        width: 20px;
        filter: opacity(50%);
        transition: 0.3s;
        cursor: pointer;

        :hover {
            filter: opacity(100%);
        }
    }
`;
Header.displayName = 'ChatHeader';

export const Body = styled.div`
    flex: 1 1 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;

    > div:nth-child(1) {
        flex: 1 1 auto;
    }
`;
Body.displayName = 'ChatBody';