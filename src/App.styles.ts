import styled from 'styled-components';

export const Container = styled.div`
    background-color: #17181F;
    color: #797A81;
    min-height: 100vh;

    
`;

export const Content = styled.div`
    margin auto;
    max-width: 61.25rem;
    padding: 0.625rem;
    display:flex;
    flex-direction:column;

`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 1.25rem;
`;


export const List = styled.ul`
    display: flex;
    flex-direction:column;
    flex-grow: 1;
    list-style: none;
    margin-right: 2.5rem;
`;
