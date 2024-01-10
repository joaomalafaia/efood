import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartSection>
      <ul>
        {items.map((item) => (
          <S.CartItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h4>{item.nome}</h4>
              <p>{parseToBrl(item.preco)}</p>
              <button
                onClick={() => removeItem(item.id)}
                title="Excluir item do carrinho"
                type="button"
              />
            </div>
          </S.CartItem>
        ))}
      </ul>
      <S.Prices>
        <p>Valor total</p>
        <p>{parseToBrl(getTotalPrice(items))}</p>
      </S.Prices>
    </S.CartSection>
  )
}

export default Cart
