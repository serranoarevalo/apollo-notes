import { injectGlobal } from "styled-components";
import reset from "styled-reset";

injectGlobal`
    ${reset};
    :root {
        --greyColor: #A2A19E;
        --blackColor: #373630;
    }
    body{
        background-color:#F7F5F3;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:var(--blackColor);
        padding:50px 100px;
    }
    a {
        color:inherit;
        text-decoration:none;
    }
    input,
    textarea{
        appearance:none;
        border:none;
        background-color:transparent;
        resize:none;
        &:focus,
        &:active{
            outline:none;
        }
    }
`;
