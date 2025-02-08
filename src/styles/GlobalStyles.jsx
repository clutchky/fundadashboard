import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /*GOOGLE FONTS*/

:root {
    /*Colors*/
    --primary: #81c705;
    --white: oklch(100% 0 0);

    /* Fonts and typography */
    --body-font: "Inter", sans-serif;

    /* Font weights */
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;

}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--body-font);
}
`;

export default GlobalStyles;
