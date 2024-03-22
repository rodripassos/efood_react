import { Link } from 'react-router-dom'
import { Infos } from '../RestaurantsList/styles'
import Tag from '../Tag'
import { Card, Descricao, Nome, Nota, Titulo } from './styles'

import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  category: string
  description: string
  destaque: boolean
  image: string
  grade: number
  id: number
}

const Restaurante = ({
  title,
  category,
  description,
  destaque,
  image,
  grade,
  id
}: Props) => {
  const tagDestaque = (destaque: boolean) => {
    if (destaque === true) return <Tag>Em destaque</Tag>
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {tagDestaque(destaque)}
        <Tag>{category}</Tag>
      </Infos>
      <Titulo>
        <Nome>{title}</Nome>
        <Nota>
          <Nome>{grade}</Nome>
          <Nome>
            <img src={estrela} />
          </Nome>
        </Nota>
      </Titulo>
      <Descricao>{description}</Descricao>
      <Link to={`/details/${id}`}>
        <Tag size="big">Saiba mais</Tag>
      </Link>
    </Card>
  )
}

export default Restaurante
