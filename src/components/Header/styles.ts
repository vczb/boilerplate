import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`

export const Hamburger = styled.div`
  width: fit-content;
  margin-left: auto;

  button,
  svg {
    width: 3rem;
    height: 3rem;
  }
`
