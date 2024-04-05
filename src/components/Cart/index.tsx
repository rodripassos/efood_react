import {
  ButtonCheckOut,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../RestaurantDetail'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.price!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <h4>{formataPreco(item.price)}</h4>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <div>Valor total</div>
          <div>{formataPreco(getTotalPrice())}</div>
        </Prices>
        <ButtonCheckOut
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a entrega
        </ButtonCheckOut>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
