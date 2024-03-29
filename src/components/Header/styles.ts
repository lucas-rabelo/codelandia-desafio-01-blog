import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: var(--dark-20);
    padding: 48px 24px;
`;

export const HeaderArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: clamp(327px, 100%, 1216px);
    margin: 0 auto 15px;
`;

export const Logo = styled.h3`
    color: var(--dark-60);
    font-family: 'Space Grotesk';
    font-weight: 500;
    
    > span {
        color: var(--brand-color);
        font-family: 'Space Grotesk';
        font-weight: 500;
    }
`;

export const ButtonsArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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