import { Link } from 'react-router-dom'
import { FooterContent, Social, Texto } from './styles'

import rodape from '../../assets/images/Rodape.png'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/Instagram.png'
import facebook from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/Twitter.png'

const Footer = () => (
  <>
    <FooterContent style={{ backgroundImage: `url(${rodape})` }}>
      <Link to="/">
        <img src={logo} alt="EFood" />
      </Link>
      <Social>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </Social>
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </Texto>
    </FooterContent>
  </>
)

export default Footer
