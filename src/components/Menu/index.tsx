import Button from 'components/Button'
import Sidebar from 'components/Sidebar'
import { usePortal } from 'hooks/use-portal'
import Close from 'icons/Close'
import * as S from './styles'

const Menu = () => {
  const { closePortal } = usePortal()

  const handleClick = () => {
    closePortal()
  }
  return (
    <Sidebar>
      <S.Menu>
        <S.Close>
          <Button size="fit" variant="ghost" onClick={() => handleClick()}>
            <Close />
          </Button>
        </S.Close>
      </S.Menu>
    </Sidebar>
  )
}

export default Menu
