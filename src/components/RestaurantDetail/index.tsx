import { useState } from 'react'
import { Cardapio } from '../../pages/Home'
import ProductDetail from '../Product'
import {
  List,
  Modal,
  ModalContent,
  RestaurantsList as RestaurantsListStyle
} from './styles'

import fechar from '../../assets/images/close.png'
import { open, add } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  produtos: Cardapio[]
}

interface ModalState {
  isVisible: boolean
  name: string
  image: string
  description: string
  portion: string
  price: number
}

// export type Produto = {
//   id: number
//   name: string
//   image: string
//   price: number
// }

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const RestaurantDetail = ({ produtos }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    name: '',
    image: '',
    description: '',
    portion: '',
    price: 0
  })

  const [product, setProduct] = useState<Produto>({
    id: 0,
    name: '',
    image: '',
    price: 0
  })

  const fillProduto = (
    id: number,
    name: string,
    image: string,
    price: number
  ) => {
    setProduct({
      id: id,
      name: name,
      image: image,
      price: price
    })
  }

  const openModal = (
    name: string,
    image: string,
    description: string,
    portion: string,
    price: number
  ) => {
    setModal({
      isVisible: true,
      name: name,
      image: image,
      description: description,
      portion: portion,
      price: price
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      name: '',
      image: '',
      description: '',
      portion: '',
      price: 0
    })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(product))
    dispatch(open())
  }

  return (
    <div className="container">
      <RestaurantsListStyle>
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent className="container">
            <header>
              <img
                src={fechar}
                alt="Ícone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </header>
            <div className="infos">
              <div>
                <img src={modal.image} alt="Foto do produto" />
              </div>
              <div>
                <h4>{modal.name}</h4>
                <p>{modal.description}</p>
                <p>Serve: {modal.portion}</p>
                <button onClick={addToCart}>
                  Adicionar ao carrinho - {formataPreco(modal.price)}
                </button>
              </div>
            </div>
          </ModalContent>
          <div
            onClick={() => {
              closeModal()
            }}
            className="overlay"
          ></div>
        </Modal>
        <List>
          {produtos.map((produto) => (
            <>
              <a
                onClick={() => {
                  openModal(
                    produto.nome,
                    produto.foto,
                    produto.descricao,
                    produto.porcao,
                    produto.preco
                  )
                  fillProduto(
                    produto.id,
                    produto.nome,
                    produto.foto,
                    produto.preco
                  )
                }}
              >
                <ProductDetail
                  key={produto.id}
                  description={produto.descricao}
                  image={produto.foto}
                  title={produto.nome}
                />
              </a>
            </>
          ))}
        </List>
      </RestaurantsListStyle>
    </div>
  )
}

export default RestaurantDetail
