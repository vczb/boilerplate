import Button from 'components/Button'
import Menu from 'components/Menu'
import Hamburger from 'icons/Hamburger'

import * as S from './styles'
import { useState } from 'react'
import Portal from 'components/Portal'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Portal isOpen={isOpen}>
        <Menu handleClose={() => setIsOpen(false)} />
      </Portal>
      <S.Header>
        <S.Hamburger>
          <Button size="fit" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            <Hamburger />
          </Button>
        </S.Hamburger>
      </S.Header>
    </>
  )
}

export default Header
