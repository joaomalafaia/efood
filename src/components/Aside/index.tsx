import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import Checkout from '../Checkout'
import Cart from '../Cart'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import * as S from './styles'
import { ModalButton } from '../Dish/styles'

const Aside = () => {
  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)
  const { opened, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartScreen className={opened ? 'opened' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length !== 0 ? (
          <div className={showCheckout ? '' : 'visible'}>
            <Cart />
            <ModalButton
              onClick={() => setShowCheckout(!showCheckout)}
              title="Continuar com a entrega"
              type="submit"
            >
              Continuar com a entrega
            </ModalButton>
          </div>
        ) : (
          <p>
            O seu carrinho está vazio, adicione algum produto antes de fazer o
            checkout
          </p>
        )}
        <>
          <Checkout visibility={showCheckout ? 'visible' : ''} />
        </>
      </S.Sidebar>
    </S.CartScreen>
  )
}

export default Aside
