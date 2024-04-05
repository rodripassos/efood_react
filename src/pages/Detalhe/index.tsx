import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import RestaurantDetail from '../../components/RestaurantDetail'
import { useGetRestaurantDetailQuery } from '../../services/api'

const Detalhe = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestaurantDetailQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header
        id={restaurante.id}
        tipo={restaurante.tipo}
        image={restaurante.capa}
        title={restaurante.titulo}
      />
      <RestaurantDetail produtos={restaurante.cardapio} />
    </>
  )
}

export default Detalhe
