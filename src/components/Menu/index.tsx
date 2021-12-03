import Button from 'components/Button'
import Overlay from 'components/Overlay'
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
    <>
      <Overlay>
        <Button
          aria-label="close menu"
          size="full"
          variant="ghost"
          onClick={() => handleClick()}
        />
      </Overlay>
      <Sidebar>
        <S.Menu>
          <S.Close>
            <Button
              aria-label="close menu"
              size="fit"
              variant="ghost"
              onClick={() => handleClick()}
            >
              <Close />
            </Button>
          </S.Close>
        </S.Menu>
      </Sidebar>
    </>
  )
}

export default Menu
