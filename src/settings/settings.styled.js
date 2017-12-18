import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: ${({ children }) =>
        children.includes('Week Name')
            ? 'rgb(41, 246, 190)'
            : children.includes('Month Name')
              ? 'rgb(250, 229, 129)'
              : 'rgb(25, 153, 233)'};
`;
