import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: var(--dark-20);
    padding: 48px 24px;
`;

export const Title = styled.h1`
    color: var(--dark-60);
    font-family: 'Space Grotesk';
    font-weight: 500;

    margin-bottom: 32px;
    
    > span {
        color: var(--brand-color);
        font-family: 'Space Grotesk';
        font-weight: 500;
    }
`;