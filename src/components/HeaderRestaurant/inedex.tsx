import { Link } from 'react-router-dom'

import { Logo } from '../../styles'
import logo from '../../assets/images/efood-logo.png'
import { Header, HeaderContent, HeaderText } from './styles'

const RestHeader = () => (
  <Header>
    <HeaderContent className="container">
      <Link className="header-text" to="/">
        Restaurantes
      </Link>
      <Link to="/">
        <Logo src={logo} alt="efood" />
      </Link>
      <HeaderText>0 produto(s) no carrinho</HeaderText>
    </HeaderContent>
  </Header>
)

export default RestHeader
