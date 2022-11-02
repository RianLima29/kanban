import { createGlobalStyle } from "styled-components";
import { COLOR_BG } from "./config";

const GlobalStyle = createGlobalStyle`

    *{
        font-family: 'Open Sans', sans-serif;
        padding: 0;
        box-sizing: border-box;
        margin: 0;
    }
    body{
        background-color: ${COLOR_BG};
    }

`;

export default GlobalStyle;
