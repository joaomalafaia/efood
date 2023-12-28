import { useEffect, useState } from 'react'

import HomeHero from '../../components/Hero/inedex'
import RestaurantsList from '../../components/RestaurantList'

export interface Dish {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

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
