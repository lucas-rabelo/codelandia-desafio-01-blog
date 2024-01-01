import styled from "styled-components";
import { MagnifyingGlass } from '@phosphor-icons/react';

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: clamp(327px, 100%, 1216px);

    padding: 16px 24px;
    border-radius: 8px;
    gap: 12px;

    background: var(--dark-30);
`;

export const Icon = styled(MagnifyingGlass)`
    font-size: 18px;
    color: var(--brand-color);
`;

export const Input = styled.input`
    width: 100%;
    color: var(--dark-60);
`;