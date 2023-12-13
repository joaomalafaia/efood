import HomeHero from '../../components/Hero/inedex'
import RestaurantsList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurant'

import HiokiSushiIMG from '../../assets/images/sushi.png'
import LaDolceVitaIMG from '../../assets/images/pasta.png'

const places: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    mark: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: HiokiSushiIMG,
    infos: ['Destaque da Semana', 'Japonesa'],
    link: '/hikoi'
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    mark: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaIMG,
    infos: ['Italiana'],
    link: '/ladolcevita'
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    mark: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaIMG,
    infos: ['Italiana'],
    link: '/ladolcevita'
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    mark: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaIMG,
    infos: ['Italiana'],
    link: '/ladolcevita'
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    mark: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaIMG,
    infos: ['Italiana'],
    link: '/ladolcevita'
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    mark: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaIMG,
    infos: ['Italiana'],
    link: '/ladolcevita'
  }
]

const Home = () => (
  <>
    <HomeHero />
    <RestaurantsList restaurants={places} />
  </>
)

export default Home
