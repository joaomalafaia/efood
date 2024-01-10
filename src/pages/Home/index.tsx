import { useEffect, useState } from 'react'

import HomeHero from '../../components/Hero/inedex'
import RestaurantsList from '../../components/RestaurantList'

const Home = () => {
  const [places, setPlaces] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPlaces(res))
  }, [])

  return (
    <>
      <HomeHero />
      <RestaurantsList restaurants={places} />
    </>
  )
}

export default Home
