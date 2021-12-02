import { usePortal } from 'hooks/use-portal'

import Button from 'components/Button'
import Menu from 'components/Menu'
import Hamburger from 'icons/Hamburger'

import * as S from './styles'

const Header = () => {
  const { openPortal } = usePortal()

  const handleClick = () => {
    openPortal(<Menu />)
  }

  return (
    <S.Header>
      <S.Hamburger>
        <Button size="fit" variant="ghost" onClick={() => handleClick()}>
          <Hamburger />
        </Button>
      </S.Hamburger>
    </S.Header>
  )
}

export default Header
