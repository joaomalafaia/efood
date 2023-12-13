import DishObject from '../../models/Dish'
import Dish from '../Dish'
import { DishContainer, List } from './styles'

type Props = {
  dishes: DishObject[]
}

const DishList = ({ dishes }: Props) => (
  <DishContainer className="container">
    <List>
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          description={dish.description}
          image={dish.image}
        />
      ))}
    </List>
  </DishContainer>
)

export default DishList
