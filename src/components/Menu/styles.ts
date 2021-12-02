import styled, { css } from 'styled-components'

export const Menu = styled.menu`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${theme.spacings.compact};
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
    button,
    svg {
      width: 3rem;
      height: 3rem;
    }
    svg {
      fill: ${theme.colors.white};
    }
  `}
`
