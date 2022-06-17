import { createGlobalStyle } from "styled-components";
import RedHatDisplay from "./RedHatDisplay-VariableFont_wght.ttf";

const FontStyle = createGlobalStyle`

@font-face {
    font-family: 'Red Hat Display';
    src: url(${RedHatDisplay}) format('ttf')
}

`;

export default FontStyle;