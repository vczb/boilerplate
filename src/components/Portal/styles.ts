import styled, { css } from 'styled-components'

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    overflow: hidden;
    background: transparent;
    z-index: ${theme.layers.overlay};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    transition: ${theme.transition.default};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
  `}
`
