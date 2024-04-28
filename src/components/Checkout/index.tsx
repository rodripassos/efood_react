import { useEffect } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'

import { Row, InputGroup, CheckoutMessage } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import { Navigate } from 'react-router-dom'
import Button from '../Button'

export type Props = {
  renderPayment: boolean
}

const Checkout = ({ renderPayment }: Props) => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      monthCard: '',
      yearCard: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(9, 'O campo precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string().required('O campo é obrigatório'),
      monthCard: Yup.string().required('O campo é obrigatório'),
      yearCard: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.price as number
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cvv,
            expires: {
              month: Number(values.monthCard),
              year: Number(values.yearCard)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid //retorna um booleano - se os dois forem verdadeiro retorna true

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <>
      <div>
        {isSuccess && data ? (
          <>
            <CheckoutMessage>
              <h4>Pedido realizado - {data.orderId}</h4>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </CheckoutMessage>
          </>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {renderPayment ? (
              <>
                <h3>Pagamento - valor a pagar </h3>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input
                      id="cardName"
                      type="text"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardName') ? 'error' : ''}
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cvv">CVV</label>
                    <InputMask
                      id="cvv"
                      type="text"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cvv') ? 'error' : ''}
                      mask="999"
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="monthCard">Mês de vencimento</label>
                    <InputMask
                      id="monthCard"
                      type="text"
                      name="monthCard"
                      value={form.values.monthCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('monthCard') ? 'error' : ''}
                      mask="99"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="yearCard">Ano de vencimento</label>
                    <InputMask
                      id="yearCard"
                      type="text"
                      name="yearCard"
                      value={form.values.yearCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('yearCard') ? 'error' : ''}
                      mask="9999"
                    />
                  </InputGroup>
                </Row>
                <Row />
                <Row />
                <Row>
                  <Button
                    title="Clique aqui para continuar com a compra"
                    type="submit"
                    onClick={form.handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading
                      ? 'Finalizando compra...'
                      : 'Finalizar pagamento'}
                  </Button>
                </Row>
              </>
            ) : (
              <>
                <h3>Entrega</h3>
                <Row>
                  <InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="adress">Endereço</label>
                    <input
                      id="adress"
                      type="text"
                      name="adress"
                      value={form.values.adress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('adress') ? 'error' : ''}
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      id="cep"
                      type="text"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cep') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      type="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complement') ? 'error' : ''
                      }
                    />
                  </InputGroup>
                </Row>
              </>
            )}
          </form>
        )}
      </div>
    </>
  )
}

export default Checkout
