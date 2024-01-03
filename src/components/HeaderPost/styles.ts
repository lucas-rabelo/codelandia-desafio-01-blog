import styled from "styled-components";
import { CaretCircleLeft } from '@phosphor-icons/react';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: var(--dark-20);
    padding: 24px 24px 48px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: clamp(327px, 100%, 1216px);
    margin: 0 auto;
`;

export const BackButton = styled.a`
    display: flex;
    align-items: center;

    cursor: pointer;
`;

export const BackIcon = styled(CaretCircleLeft)`
    color: var(--dark-60);
    font-size: 24px;

    margin-right: 8px;
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

export const DatePost = styled.span`
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;

    color: var(--brand-color);
`;

export const Title = styled.h1`
    color: var(--dark-60);
    font-family: 'Space Grotesk';
    font-weight: 500;

    margin: 32px auto 0;
    width: clamp(327px, 100%, 1216px);
`;