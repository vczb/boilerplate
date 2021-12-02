import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

const buttonModifier = {
  ghost: () => css`
    background: transparent;
    border: none;
    font-weight: none;
    transition: none;
    cursor: default;
  `,
  fit: () => css`
    width: fit-content;
  `,
  full: () => css`
    width: 100%;
  `,
  pointer: () => css`
    cursor: pointer;
  `
}

export const Button = styled.button<
  Pick<ButtonProps, 'variant' | 'size' | 'pointer'>
>`
  ${({ theme, variant, size, pointer }) => css`
    border: none;
    cursor: default;

    transition: ${theme.transition.default};

    font-family: ${theme.font.family};

    ${!!variant && buttonModifier[variant]()};
    ${!!size && buttonModifier[size]()};
    ${!!pointer && buttonModifier.pointer()};
  `}
`
