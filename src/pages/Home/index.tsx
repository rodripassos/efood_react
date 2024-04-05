import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetRestaurantsQuery } from '../../services/api'

export interface Cardapio {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurantsList } = useGetRestaurantsQuery()

  if (restaurantsList) {
    return (
      <>
        <Hero />
        <RestaurantsList restaurantes={restaurantsList} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
