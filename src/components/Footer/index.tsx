import { Logo } from '../../styles'
import { FooterArea, FooterText, LinksList, MediaIcons } from './styles'
import logo from '../../assets/images/efood-logo.png'
import instagram from '../../assets/images/instagram-icon.png'
import facebook from '../../assets/images/facebook-icon.png'
import twitter from '../../assets/images/twitter-icon.png'

const Footer = () => (
  <FooterArea>
    <div className="container">
      <Logo src={logo} alt="" />
      <LinksList>
        <li>
          <MediaIcons src={instagram} alt="instagram" />
        </li>
        <li>
          <MediaIcons src={facebook} alt="facebook" />
        </li>
        <li>
          <MediaIcons src={twitter} alt="twitter" />
        </li>
      </LinksList>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </div>
  </FooterArea>
)

export default Footer
