import Button from 'components/Button'
import Overlay from 'components/Overlay'
import Sidebar from 'components/Sidebar'

import Close from 'icons/Close'
import * as S from './styles'

type MenuProps = {
  handleClose: () => void
}

const Menu = ({ handleClose }: MenuProps) => {
  return (
    <>
      <Overlay>
        <Button
          aria-label="close menu"
          size="full"
          variant="ghost"
          onClick={handleClose}
        />
      </Overlay>
      <Sidebar>
        <S.Menu>
          <S.Close>
            <Button
              aria-label="close menu"
              size="fit"
              variant="ghost"
              onClick={handleClose}
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
