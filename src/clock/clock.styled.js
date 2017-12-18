import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.8em;
    color: rgb(250, 229, 129);
`;

export const DayOfWeek = styled.span`
    padding-right: 0.5em;
    color: rgb(41, 246, 190);
`;

export const Month = styled.span`
    padding-right: 0.2em;
`;

export const DayOfMonth = styled.span``;

export const TimeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: rgb(25, 153, 233);
`;

export const Time = styled.span`
    font-size: 12em;
`;

export const AmPm = styled.span`
    font-size: 4em;
    line-height: 4.8em;
`;
