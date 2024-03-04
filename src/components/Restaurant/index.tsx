import { Infos } from '../RestaurantsList/styles'
import Tag from '../Tag'
import { Card, Descricao, Nome, Nota, Titulo } from './styles'

import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  grade: string
}

const Restaurante = ({
  title,
  category,
  description,
  infos,
  image,
  grade
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
      <Tag>{category}</Tag>
    </Infos>
    <Titulo>
      <Nome>{title}</Nome>
      <Nota>
        {grade} <img src={estrela} />
      </Nota>
    </Titulo>
    <Descricao>{description}</Descricao>
    <Link to="/details">
      <Tag size="big">Saiba mais</Tag>
    </Link>
  </Card>
)

export default Restaurante
