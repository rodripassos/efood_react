import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
  margin-top: 8px;
  align-items: flex-end;
`
export const InputGroup = styled.div`
  flex: auto;
  font-weight: 700;
  max-width: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    line-height: 16px;
    color: ${cores.rosaClaro};
  }

  input {
    background-color: ${cores.rosaClaro};
    color: ${cores.inputColor};
    height: 32px;
    padding: 8px;
    border: 1px solid ${cores.rosaClaro};
    width: 100%;

    &.error {
      border: 3px solid red;
    }
`
export const CheckoutMessage = styled.div`
  margin-bottom: 24px;

  h4 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
`
