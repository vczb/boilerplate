import { ThemeProvider } from "styled-components"
import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global';
import { PortalProvider } from '../src/hooks/use-portal'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <PortalProvider>
        <Story/>
      </PortalProvider>
    </ThemeProvider>
  )
]

