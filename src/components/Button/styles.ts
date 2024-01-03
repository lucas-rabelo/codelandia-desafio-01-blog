import { GoogleLogo, PlusCircle, SignOut } from "@phosphor-icons/react";
import styled, { css } from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 5px;

    color: var(--dark-60);
    
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid var(--brand-color);

    cursor: pointer;
    transition: 300ms;

    &:hover {
        background: var(--brand-color);
        border: 1px solid var(--dark-20);
        transition: 300ms;
    }
`;

const IconCSS = css`
    font-size: 18px;
    color: var(--dark-60);
`;

export const IconGoogle = styled(GoogleLogo)`${IconCSS}`;

export const IconAdd = styled(PlusCircle)`${IconCSS}`;

export const IconSignOut = styled(SignOut)`${IconCSS}`;