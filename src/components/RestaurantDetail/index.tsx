import Product from '../../models/Product'
import ProductDetail from '../Product'
import { List, RestaurantsList as RestaurantsListStyle } from './styles'

export type Props = {
  produtos: Product[]
}

const RestaurantDetail = ({ produtos }: Props) => (
  <div className="container">
    <RestaurantsListStyle>
      <List>
        {produtos.map((produto) => (
          <ProductDetail
            key={produto.id}
            description={produto.description}
            image={produto.image}
            title={produto.title}
          />
        ))}
      </List>
    </RestaurantsListStyle>
  </div>
)

export default RestaurantDetail
