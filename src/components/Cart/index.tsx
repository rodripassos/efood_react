import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../RestaurantDetail'
import Checkout from '../Checkout'

import {
  ButtonCheckOut,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar
} from './styles'
import { Row } from '../Checkout/styles'

const Cart = () => {
  const [goCheckout, setGoCheckout] = useState(false)
  const [goPayment, setGoPayment] = useState(false)
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
        {goCheckout ? (
          <>
            {goPayment ? (
              <Checkout renderPayment={true} />
            ) : (
              <Checkout renderPayment={false} />
            )}
            {!goPayment ? (
              <Row>
                <ButtonCheckOut
                  title="Clique aqui para continuar com a compra"
                  type="button"
                  onClick={() => setGoPayment(true)}
                >
                  {goPayment
                    ? 'Finalizar pagamento'
                    : 'Continuar com o pagamento'}
                </ButtonCheckOut>
              </Row>
            ) : (
              ''
            )}
            {goPayment ? (
              <Row>
                {items.length > 0 ? (
                  <ButtonCheckOut
                    title="Clique aqui para continuar voltar ao endereço"
                    type="button"
                    onClick={() => setGoPayment(false)}
                  >
                    Voltar para a edição de endereço
                  </ButtonCheckOut>
                ) : (
                  <ButtonCheckOut
                    title="Clique aqui para fechar o carrinho"
                    type="button"
                    onClick={() => {
                      closeCart()
                      setGoCheckout(false)
                      setGoPayment(false)
                    }}
                  >
                    Concluir
                  </ButtonCheckOut>
                )}
              </Row>
            ) : (
              ''
            )}
          </>
        ) : (
          <>
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
          </>
        )}
        {!goPayment ? (
          <>
            <Row />
            {items.length > 0 ? (
              <ButtonCheckOut
                title="Clique aqui para continuar com a compra"
                type="button"
                onClick={() => setGoCheckout(!goCheckout)}
              >
                {goCheckout
                  ? 'Voltar para o carrinho'
                  : 'Continuar com a entrega'}
              </ButtonCheckOut>
            ) : (
              <ButtonCheckOut
                title="Clique aqui para escolher um produto"
                type="button"
                onClick={() => closeCart()}
              >
                Escolher um produto
              </ButtonCheckOut>
            )}
          </>
        ) : (
          ''
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
