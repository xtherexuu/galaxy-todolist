import { createGlobalStyle } from "styled-components";
import Eina01RegularFont from "./Utils/Eina01-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: EinaRegular;
        src: url(${Eina01RegularFont});
    }

    * {
        font-family: EinaRegular;
        box-sizing: border-box;
    }

    html, ::before, ::after {
        box-sizing: inherit;
    }
`;
