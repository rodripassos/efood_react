import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosaEscuro};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  ${(props) => (props.size === 'big' ? 'margin: 8px' : 'margin-right: 8px')};
`
