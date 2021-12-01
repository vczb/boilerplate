import styled from 'styled-components'
import { media } from 'styles/media'

export const Wrapper = styled.main`
  color: red;
  display: flex;
  width: 100%;
  height: 100%;
  background: orange;
  ${media.sm`
    background: aqua;
  `}
`
