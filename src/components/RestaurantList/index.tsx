import RestaurantTag from '../Restaurant'

import { List, RestaurantContainer } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantContainer className="container">
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantTag
          key={restaurant.id}
          titulo={restaurant.titulo}
          avaliacao={restaurant.avaliacao}
          descricao={restaurant.descricao}
          capa={restaurant.capa}
          destacado={restaurant.destacado}
          tipo={restaurant.tipo}
          id={restaurant.id}
        />
      ))}
    </List>
  </RestaurantContainer>
)

export default RestaurantsList
