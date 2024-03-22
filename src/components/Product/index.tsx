import { BotaoAdicionar, Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductDetail = ({ title, description, image }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 263) {
      return descricao.slice(0, 260) + '...'
    }
    return descricao
  }
  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Titulo>{title}</Titulo>
        <Descricao>{getDescricao(description)}</Descricao>
        <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
      </Card>
    </>
  )
}

export default ProductDetail
