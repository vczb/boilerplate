import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { PortalProvider } from 'hooks/use-portal'
import Portal from 'components/Portal'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Get started with this Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <PortalProvider>
        <Portal />
        <Component {...pageProps} />
      </PortalProvider>
    </ThemeProvider>
  )
}

export default App
