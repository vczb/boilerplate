import * as S from './styles'

export type PortalProps = {
  children: React.ReactNode
  isOpen?: boolean
}

const Portal = ({ children, isOpen = false }: PortalProps) => {
  return <S.Wrapper isOpen={isOpen}>{children}</S.Wrapper>
}

export default Portal
