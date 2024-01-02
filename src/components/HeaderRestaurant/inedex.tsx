import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Logo } from '../../styles'
import logo from '../../assets/images/efood-logo.png'
import { Header, HeaderContent, HeaderText } from './styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const RestHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Header>
      <HeaderContent className="container">
        <Link className="header-text" to="/">
          Restaurantes
        </Link>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <HeaderText onClick={openCart}>
          {items.length} produto(s) no carrinho
        </HeaderText>
      </HeaderContent>
    </Header>
  )
}

export default RestHeader
