import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContent = styled.footer`
  width: 100%;
  height: 298px;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;

  img {
    margin: auto;
    padding-top: 40px;
    display: block;
    margin-bottom: 32px;
  }
`
export const Social = styled.ul`
  display: flex;
  justify-content: center;

  li {
    margin-right: 8px;
  }
`

export const Texto = styled.h4`
  color: ${cores.rosaEscuro};
  font-size: 10px;
  text-align: center;
  padding-bottom: 40px;
`
