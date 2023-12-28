import { Dish } from '../../pages/Home'
import Food from '../Dish'
import { DishContainer, List } from './styles'

type Props = {
  dishes: Dish[]
}

const DishList = ({ dishes }: Props) => (
  <DishContainer className="container">
    <List>
      {dishes.map((dish) => (
        <Food dishes={dish} key={dish.id} />
      ))}
    </List>
  </DishContainer>
)

export default DishList
