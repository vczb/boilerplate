import { usePortal } from 'hooks/use-portal'

import * as S from './styles'

const Portal = () => {
  const { isOpen, content } = usePortal()

  return <S.Wrapper isOpen={isOpen}>{content}</S.Wrapper>
}

export default Portal
