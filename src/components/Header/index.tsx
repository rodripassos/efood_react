import { Link } from 'react-router-dom'
import { HeaderContent, RestaurantCover, Texto, Tipo, Titulo } from './styles'

import vetor from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

type Props = {
  id: number
  tipo: string
  image: string
  title: string
}

const Header = ({ id, tipo, image, title }: Props) => {
  const tipoCozinha = tipo[0].toUpperCase() + tipo.substring(1)

  return (
    <>
      <HeaderContent style={{ backgroundImage: `url(${vetor})` }}>
        <div className="container">
          <Texto>Restaurantes</Texto>
          <Link to="/">
            <img src={logo} alt="EFood" />
          </Link>
          <Texto>0 produto(s) no carrinho</Texto>
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
