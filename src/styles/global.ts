import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.GREEN_500};
  }

  body {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.GRAY_100};
    background-color: ${(props) => props.theme.GRAY_800};
  }

  body, textarea, input, button {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`