import styled from 'styled-components';

type ContainerProps = {
    isDone: boolean;
}

export const Container = styled.li(({isDone}:ContainerProps) => (
    `
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    background-color: #20212C;
    flex-grow:1;

    label {
        color: #CCC;
        text-decoration: ${isDone ? 'line-through' : 'initial'};
        color: ${isDone ? 'red' : '#ccc'};
    }

    input {
        margin-right: 0.625rem;
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid #FF6961;
    }
`
));
