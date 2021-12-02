import styled, { css } from 'styled-components'
import { media } from 'styles/media'
import { SidebarProps } from '.'

const asideModifier = {
  left: () => css`
    margin-right: auto;
  `,
  right: () => css`
    margin-left: auto;
  `
}

export const Aside = styled.aside<Pick<SidebarProps, 'align'>>`
  ${({ theme, align }) => css`
    width: 100%;
    height: 100vh;
    background: ${theme.colors.gradients.l180d};

    ${media.sm`
      width: 50vw;
    `}
    ${media.md`
      width: 30vw;
    `}
    ${!!align && asideModifier[align]()};
  `}
`
