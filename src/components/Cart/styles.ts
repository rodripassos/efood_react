import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
// import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preta};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  padding-top: 32px;
  padding-left: 8px;
  padding-right: 8px;
  max-width: 360px;
  width: 100%;
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  color: ${cores.rosaClaro};
  margin-bottom: 24px;
  margin-top: 32px;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 8px 12px;
  position: relative;
  background-color: ${cores.rosaClaro};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.rosaEscuro};
    font-weight: 900;
    font-size: 21px;
  }

  h4 {
    display: block;
    color: ${cores.rosaEscuro};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-left: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ButtonCheckOut = styled.button`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosaEscuro};
  border: none;
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
