import {
  createGlobalStyle,
  GlobalStyleComponent,
  css,
  DefaultTheme
} from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalStyles: GlobalStyleComponent<any, DefaultTheme> = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }
    html,
    body,
    #__next {
      height: 100%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small};
    }
    ul,
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
  `}
`

export default GlobalStyles
