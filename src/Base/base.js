import { createGlobalStyle } from "styled-components";
import backgroundImage from "../images/background.jpg";
import Theme from "./theme";

const {
    // colors: { primaryColor },
    // regular, bold
    typography: { baseFont },
} = Theme;

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 15px;
    }

    body {
        /* min-height: 100vh; */
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        font-family: ${baseFont};
    }
`;

export default GlobalStyle;
