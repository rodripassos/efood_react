import { BotaoAdicionar, Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductDetail = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
  </Card>
)

export default ProductDetail
