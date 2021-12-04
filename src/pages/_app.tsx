import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

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

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
