/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from 'styled-components'

type Breakpoints = {
  [key: string]: string
}

const breakpoints: Breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
}

export const media = Object.keys(breakpoints).reduce((acc: any, view) => {
  acc[view] = (args: string) => css`
    @media (min-width: ${breakpoints[view]}) {
      ${args};
    }
  `
  return acc
}, {})
