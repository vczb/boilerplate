import Button from 'components/Button'
import { usePortal } from 'hooks/use-portal'
import Hamburger from 'icons/Hamburger'
import * as S from './styles'

const Header = () => {
  const { openPortal } = usePortal()

  const handleClick = () => {
    openPortal(<>menu</>)
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
