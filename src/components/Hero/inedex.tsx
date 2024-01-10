import logo from '../../assets/images/efood-logo.png'

import { Hero, HeroText } from './styles'
import { Logo } from '../../styles'

const HomeHero = () => (
  <Hero>
    <h1>
      <Logo src={logo} alt="efood" />
    </h1>
    <HeroText>Viva experiências gastronômicas no conforto da sua casa</HeroText>
  </Hero>
)

export default HomeHero
