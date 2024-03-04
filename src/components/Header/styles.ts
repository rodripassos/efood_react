import styled from 'styled-components'
import { cores } from '../../styles'

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
  }

  img {
    margin: auto;
  }
`
export const RestaurantCover = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    margin: auto;
    width: 100%;
  }
`

export const Texto = styled.h1`
  color: ${cores.rosaEscuro};
  font-size: 18px;
  font-weight: 900;
`
