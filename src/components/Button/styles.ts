import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: none;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosaEscuro};
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
