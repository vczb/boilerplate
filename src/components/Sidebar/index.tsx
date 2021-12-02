import * as S from './styles'

export type SidebarProps = {
  align?: 'left' | 'right'
  children?: React.ReactNode
}

const Sidebar = ({ align = 'right', children }: SidebarProps) => (
  <S.Aside align={align}>{children}</S.Aside>
)

export default Sidebar
