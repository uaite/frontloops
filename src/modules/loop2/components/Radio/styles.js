import styled from 'styled-components';

import check from '../../assets/img/check.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
`;
Container.displayName = 'RadioContainer';

export const Option = styled.label.attrs(props => ({
    tabIndex: 0
}))`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    flex: 1 1 auto;
    padding: 10px 15px;
    cursor: pointer;

    :focus {
        outline: 0;
        background-color: #ddd;
    }

    :hover {
        background-color: #eee;
    }

    :active {
        background-color: #d9d9d9;
    }

    ${/* this hides the radio button*/ void 0}
    > input[type="radio"] {
        position: absolute;
        top: auto;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
        width: 1px;
        height: 1px;
        white-space: nowrap;
    }

    > span {
        flex: 1 1 auto;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1.1;
        color: #888;
    }

    > img {
        width: 50px;
        flex: 0 0 auto;
        margin: 0 15px;
    }

    > input[type="radio"]:checked + span {
        background: url(${check}) no-repeat calc(100% - 5px);
        color: #000;
    }
`;
Option.displayName = 'RadioOption';