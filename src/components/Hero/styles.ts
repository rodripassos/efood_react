import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroContent = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;

  img {
    margin: auto;
    padding-top: 64px;
    display: block;
  }
`

export const Texto = styled.h1`
  padding-top: 138px;
  color: ${cores.rosaEscuro};
  font-size: 36px;
  font-weight: 900;
  text-align: center;
`
