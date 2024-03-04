import { Link } from 'react-router-dom'
import { HeaderContent, RestaurantCover, Texto } from './styles'

import vetor from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import cover from '../../assets/images/apresentacao.png'

const Header = () => (
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
      <img src={cover} alt="Cover do restaurante" />
    </RestaurantCover>
  </>
)

export default Header
