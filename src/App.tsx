import { Router } from "./Router"
import { theme } from "./styles/theme/theme"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom" 
import { ThemeProvider } from "styled-components"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}