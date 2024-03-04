import styled from 'styled-components'
import { cores } from '../../styles'

export const RestaurantsList = styled.section`
  padding-top: 80px;
  color: ${cores.rosaEscuro};
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
