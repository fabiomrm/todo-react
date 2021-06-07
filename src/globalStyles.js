import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body {
        margin:3rem;
        padding:0;
        font-family: sans-serif;
        background-color: #DFDFDF;
    }

    h1 {
        font-size: 2.5rem;
        color: #2C292B;
    }

    h2 {
        font-size: 1.5rem;
        color: #2C292B;
    }
`;

export default GlobalStyle;