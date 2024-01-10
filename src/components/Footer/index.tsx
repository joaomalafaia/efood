import logo from '../../assets/images/efood-logo.png'
import instagram from '../../assets/images/instagram-icon.png'
import facebook from '../../assets/images/facebook-icon.png'
import twitter from '../../assets/images/twitter-icon.png'

import { Logo } from '../../styles'
import * as S from './styles'

const Footer = () => (
  <S.FooterArea>
    <div className="container">
      <Logo src={logo} alt="" />
      <S.LinksList>
        <li>
          <S.MediaIcons
            title="Clique para visitar nosso perfil no Instagram"
            src={instagram}
            alt="instagram"
          />
        </li>
        <li>
          <S.MediaIcons
            title="Clique para visitar nosso perfil no Facebook"
            src={facebook}
            alt="facebook"
          />
        </li>
        <li>
          <S.MediaIcons
            title="Clique para visitar nosso perfil no Twitter"
            src={twitter}
            alt="twitter"
          />
        </li>
      </S.LinksList>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.FooterText>
    </div>
  </S.FooterArea>
)

export default Footer
