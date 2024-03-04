import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  border: 1px solid ${cores.rosaEscuro};
  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 8px;
  justify-content: space-between;
  align-items: center;
`
export const Nome = styled.h3`
  font-weight: bold;
  font-size: 18px;
`
export const Nota = styled(Nome)`
  margin-right: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
  padding-left: 8px;
  padding-right: 8px;
`