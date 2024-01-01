import { Heart } from "@phosphor-icons/react";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: clamp(327px, 100%, 1216px);

    border: 2px solid var(--dark-40);
    border-radius: 8px;

    padding: 32px 24px;
    gap: 20px;

    &:hover {
        cursor: pointer;
        border: 2px solid var(--brand-color);
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Date = styled.span`
    font-family: Inter;
    font-weight: 500;
    font-size: 12px;

    color: var(--brand-color);
`;

export const ButtonIcon = styled.button`
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(Heart)`
    color: var(--brand-color);
    font-size: 20px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;
`;

export const Title = styled.h3`
    font-family: Space Grotesk;
    font-weight: 500;

    color: var(--dark-60);
`;

export const Description = styled.p`
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    line-height: 22.4px;

    color: var(--dark-50);
`;
