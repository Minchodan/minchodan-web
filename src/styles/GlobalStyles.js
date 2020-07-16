import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,'NanumSquareRoundR','NanumSquareRoundB'; */
        /* font-size: 15px;
            background-color: white; */
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
    h1, h2, h3, h4, h5, h6{
        font-family:'Maven Pro', sans-serif;
    }

    @media only screen and (max-width: 768px) {
        body {
        font-size: 12px;
        }
    }

    @media only screen and (max-width: 576px) {
        body {
        font-size: 10px;
        }
    }
`;

export default globalStyles;
