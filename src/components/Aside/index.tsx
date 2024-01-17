import { useSelector, useDispatch } from 'react-redux'

import Cart from '../Cart'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import * as S from './styles'

const Aside = () => {
  const dispatch = useDispatch()
  const { opened, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartScreen className={opened ? 'opened' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length !== 0 ? (
          <Cart />
        ) : (
          <p>
            O seu carrinho está vazio, adicione algum produto antes de fazer o
            checkout
          </p>
        )}
      </S.Sidebar>
    </S.CartScreen>
  )
}

export default Aside
