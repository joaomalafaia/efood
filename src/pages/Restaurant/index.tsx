import Banner from '../../components/Banner'
import DishList from '../../components/DishList'
import RestHeader from '../../components/HeaderRestaurant/inedex'
import Dish from '../../models/Dish'

import pizzaIMG from '../../assets/images/pizza.png'

const dishes: Dish[] = [
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaIMG,
    id: 1
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaIMG,
    id: 2
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaIMG,
    id: 3
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaIMG,
    id: 4
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaIMG,
    id: 5
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaIMG,
    id: 6
  }
]

const RestaurantPage = () => (
  <>
    <RestHeader />
    <Banner />
    <DishList dishes={dishes} />
  </>
)
export default RestaurantPage
