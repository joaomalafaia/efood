import { useSelector, useDispatch } from 'react-redux'

import { ModalButton } from '../Dish/styles'
import { CartItem, CartScreen, Overlay, Prices, Sidebar } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Dish'

const Cart = () => {
  const dispatch = useDispatch()
  const { opened, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((soma, valorAtual) => {
      return (soma += valorAtual.preco)
    }, 0)
  }

  return (
    <CartScreen className={opened ? 'opened' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formataPreco(item.preco)}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  title="Excluir item do carrinho"
                  type="button"
                />
              </div>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <ModalButton title="Continuar com a entrega" type="button">
          Continuar com a entrega
        </ModalButton>
      </Sidebar>
    </CartScreen>
  )
}

export default Cart
