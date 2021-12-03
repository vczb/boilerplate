import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${theme.colors.overlays.dark};
    z-index: ${theme.layers.overlay};
  `}
`
