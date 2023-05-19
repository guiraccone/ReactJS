import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Button variant="primary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button variant="secondary" />
    </ThemeProvider>
  )
}


