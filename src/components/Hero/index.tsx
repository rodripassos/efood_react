import { Link } from 'react-router-dom'
import { HeroContent, Texto } from './styles'

import vetor from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <>
    <HeroContent style={{ backgroundImage: `url(${vetor})` }}>
      <Link to="/">
        <img src={logo} alt="EFood" />
      </Link>
      <Texto>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Texto>
    </HeroContent>
  </>
)

export default Hero
