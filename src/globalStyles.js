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
`;

export default GlobalStyle;