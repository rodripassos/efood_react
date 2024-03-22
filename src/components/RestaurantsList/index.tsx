import { Restaurant } from '../../pages/Home'
import Restaurante from '../Restaurant'
import { List, RestaurantsList as RestaurantsListStyle } from './styles'

export type Props = {
  restaurantes: Restaurant[]
}

const RestaurantsList = ({ restaurantes }: Props) => (
  <div className="container">
    <RestaurantsListStyle>
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            category={restaurante.tipo}
            description={restaurante.descricao}
            image={restaurante.capa}
            destaque={restaurante.destacado}
            title={restaurante.titulo}
            grade={restaurante.avaliacao}
            id={restaurante.id}
          />
        ))}
      </List>
    </RestaurantsListStyle>
  </div>
)

export default RestaurantsList
