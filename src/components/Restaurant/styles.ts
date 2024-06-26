import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  border: 1px solid ${cores.rosaEscuro};
  ${TagContainer} {
    margin-right: 8px;
  }

  > img {
    width: 100%;
    max-width: 472px;
    max-height: 217px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 100%;
    }
  }
`

export const Titulo = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 8px;
  justify-content: space-between;
  align-items: center;
  line-height: 21px;
  display: flex;
`
export const Nome = styled.h3`
  font-weight: bold;
  font-size: 18px;
`
export const Nota = styled.div`
  margin-right: 8px;
  line-height: 21px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;

  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
  padding-left: 8px;
  padding-right: 8px;
`
