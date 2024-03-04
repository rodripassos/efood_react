import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosaEscuro};
  color: ${cores.branca};
  position: relative;
  border: 1px solid ${cores.rosaEscuro};
  padding: 8px;

  img {
    width: 100%;
  }
`

export const Titulo = styled.h3`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
`
export const BotaoAdicionar = styled.button`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosaEscuro};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  width: 100%;
  margin-top: 8px;
  cursor: pointer;
`
