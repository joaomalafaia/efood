import { Hero, HeroText } from './styles'
import { Logo } from '../../styles'
import logo from '../../assets/images/efood-logo.png'

const HomeHero = () => (
  <Hero>
    <Logo src={logo} alt="efood" />
    <HeroText>Viva experiências gastronômicas no conforto da sua casa</HeroText>
  </Hero>
)

export default HomeHero
