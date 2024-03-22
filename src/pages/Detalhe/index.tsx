import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurant } from '../Home'

import Header from '../../components/Header'
import RestaurantDetail from '../../components/RestaurantDetail'

const Detalhe = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

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
