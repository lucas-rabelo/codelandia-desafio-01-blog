import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;

        background: var(--dark-10);
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Inter', 'Space Grotesk', sans-serif;
    }

    a {
        text-decoration: none;
        color: var(--brand-color);
    }

    :root {
        --brand-color: #E07B67;
        --dark-10: #121214;
        --dark-20: #17171A;
        --dark-30: #202024;
        --dark-40: #252529;
        --dark-50: #AFABB6;
        --dark-60: #FFFFFF;
    }
`;