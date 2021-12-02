import { usePortal } from 'hooks/use-portal'

import * as S from './styles'

const Portal = () => {
  const { isOpen, content } = usePortal()

  if (!content) return null

  return <S.Wrapper isOpen={isOpen}>{content}</S.Wrapper>
}

export default Portal
