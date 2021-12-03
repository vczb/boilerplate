import { ReactNode, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: ReactNode | string | null
  size?: 'fit' | 'full'
  variant?: 'ghost'
  pointer?: boolean
} & ButtonTypes

const Button = ({
  children,
  size = 'fit',
  variant = 'ghost',
  pointer = true,
  ...props
}: ButtonProps) => {
  return (
    <S.Button {...props} variant={variant} size={size} pointer={pointer}>
      {children}
    </S.Button>
  )
}

export default Button
