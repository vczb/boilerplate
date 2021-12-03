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
    position: relative;
    width: 100%;
    height: 100vh;
    background: ${theme.colors.primary.base};
    z-index: ${theme.layers.menu};

    ${media.sm`
      width: 50vw;
    `}
    ${media.md`
      width: 30vw;
    `}
    ${!!align && asideModifier[align]()};
  `}
`
