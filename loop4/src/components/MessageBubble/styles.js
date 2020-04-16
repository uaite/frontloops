import styled from 'styled-components';

// export const Container = styled.div`
//     display: grid;
//     grid: auto 1fr / minmax(min-content, max-content);
//     gap: 4px 0;
// `;
// Container.displayName = 'MessageBubbleContainer';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: ${props => props.type === 'sent' ? 'flex-start' : 'flex-end'};
    width: 100%;
`;
Container.displayName = 'MessageBubbleContainer';

export const Time = styled.div`
    color: #aaa;
    font-size: 0.7em;
    align-self: inherit;
`;
Time.displayName = 'MessageBubbleTime';

const SENT_MSG_COLOR = '#e6edf6';
const RECEIVED_MSG_COLOR = '#f2f2f2';
const SYSTEM_MSG_COLOR='#ffc2c0';

const getMsgBubbleTriangle = (side, color) => {
    return `
        ::before {
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            border-left: 3px solid ${side === 'right' ? color : 'transparent'};
            border-right: 3px solid ${side === 'left' ? color : 'transparent'};
            border-top: 3px solid ${color};
            border-bottom: 3px solid transparent;
            left: ${ side === 'left' ? '-5px' : 'calc(100% - 1px)' };
            top: 0px;
        }
    `;
}

const getTextTypeStyles = type => {
    switch(type) {
        case 'sent':
            return `
                background: ${SENT_MSG_COLOR};
                ${getMsgBubbleTriangle('left', SENT_MSG_COLOR)}
            `;
        case 'received':
            return `
                background: ${RECEIVED_MSG_COLOR};
                ${getMsgBubbleTriangle('right', RECEIVED_MSG_COLOR)}
            `;
        case 'system':
            return `
                background: ${SYSTEM_MSG_COLOR};
            `;
        default:
            return `
                background: #ccc;
            `;
    }
};

export const Text = styled.div`
    font-size: 0.8em;
    max-width: 70%;
    border-radius: 2px;
    padding: 8px;
    margin: 5px 0;
    position: relative;
    align-self: inherit;

    ${props => getTextTypeStyles(props.type)}
`;
Text.displayName = 'MessageBubbleText'