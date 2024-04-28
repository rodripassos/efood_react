import { Link } from 'react-router-dom'
import {
  ButtonCart,
  HeaderContent,
  RestaurantCover,
  Texto,
  Tipo,
  Titulo
} from './styles'

import vetor from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  id: number
  tipo: string
  image: string
  title: string
}

const Header = ({ tipo, image, title }: Props) => {
  const tipoCozinha = tipo[0].toUpperCase() + tipo.substring(1)

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderContent style={{ backgroundImage: `url(${vetor})` }}>
        <div className="container">
          <Texto>Restaurantes</Texto>
          <Link to="/">
            <img src={logo} alt="EFood" />
          </Link>
          <ButtonCart onClick={openCart}>
            {items.length} produto(s) no carrinho
          </ButtonCart>
        </div>
      </HeaderContent>
      <RestaurantCover>
        <div className="container">
          <Tipo>{tipoCozinha}</Tipo>
          <Titulo>{title}</Titulo>
        </div>
        <img src={image} alt="Cover do restaurante" />
      </RestaurantCover>
    </>
  )
}

export default Header
