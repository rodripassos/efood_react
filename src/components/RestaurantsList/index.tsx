import Restaurant from '../../models/Restaurant'
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
            category={restaurante.category}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            title={restaurante.title}
            grade={restaurante.grade}
          />
        ))}
      </List>
    </RestaurantsListStyle>
  </div>
)

export default RestaurantsList
