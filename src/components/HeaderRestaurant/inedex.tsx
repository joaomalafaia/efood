import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/efood-logo.png'

import { Logo } from '../../styles'
import { Header, HeaderContent, HeaderText } from './styles'

const RestHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Header>
      <HeaderContent className="container">
        <Link
          title="Clique para retornar ao menu de restaurantes"
          className="header-text"
          to="/"
        >
          Restaurantes
        </Link>
        <Link title="Clique para retornar à home" to="/">
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
