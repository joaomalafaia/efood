import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import DishList from '../../components/DishList'
import RestHeader from '../../components/HeaderRestaurant/inedex'
import { Restaurant } from '../Home'
import Cart from '../../components/Cart'

const RestaurantPage = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3 className="container">Carregando...</h3>
  }

  return (
    <>
      <RestHeader />
      <Banner restaurant={restaurant} />
      <DishList dishes={restaurant.cardapio} />
      <Cart />
    </>
  )
}
export default RestaurantPage
