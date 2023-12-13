import RestaurantObject from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import { List, RestaurantContainer } from './styles'

type Props = {
  restaurants: RestaurantObject[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantContainer className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          name={restaurant.name}
          mark={restaurant.mark}
          description={restaurant.description}
          image={restaurant.image}
          infos={restaurant.infos}
          link={restaurant.link}
        />
      ))}
    </List>
  </RestaurantContainer>
)

export default RestaurantsList
