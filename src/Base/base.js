import { createGlobalStyle } from "styled-components";

import Theme from "./theme";
import backgroundImage from "../images/background.jpg";
import backgroundMobileImage from "../images/background-m.jpg";

const {
    typography: { baseFont },
    breakpoints: { lg },
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
        background-image: url(${backgroundMobileImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        font-family: ${baseFont};

        @media ${lg} {
            background-image: url(${backgroundImage});
        }
    }
`;

export default GlobalStyle;
