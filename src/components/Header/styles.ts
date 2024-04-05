import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderContent = styled.div`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 64px;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
      align-items: center;
      margin-left: auto;

      img {
        height: 40px;
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
  }

  img {
    margin: auto;
  }
`
export const RestaurantCover = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: ${cores.branca};

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${cores.preta};
    content: '';
    opacity: 0.5;
  }

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`

export const Texto = styled.h1`
  color: ${cores.rosaEscuro};
  font-size: 18px;
  font-weight: 900;
`

export const ButtonCart = styled.a`
  color: ${cores.rosaEscuro};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    font-size: 16px;
  }
`

export const Tipo = styled.h4`
  position: absolute;
  top: 25px;
  font-weight: 100;
  font-size: 32px;
`
export const Titulo = styled.h2`
  position: absolute;
  bottom: 32px;
  font-weight: 900;
  font-size: 32px;
`
