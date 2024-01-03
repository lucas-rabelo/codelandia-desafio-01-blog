import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    width: clamp(327px, 100%, 1216px);

    padding: 40px clamp(24px, 24px, 3px);
    gap: 40px;
    margin: 0 auto;
`;