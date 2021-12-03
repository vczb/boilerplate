import * as S from './styles'

type OverlayProps = {
  children?: React.ReactNode
}

const Overlay = ({ children }: OverlayProps) => (
  <S.Overlay>{children}</S.Overlay>
)

export default Overlay
