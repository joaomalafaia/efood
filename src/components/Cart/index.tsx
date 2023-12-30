import { ModalButton } from '../Dish/styles'
import { CartItem, CartScreen, Overlay, Prices, Sidebar } from './styles'
import pizza from '../../assets/images/pizza.png'

const Cart = () => {
  return (
    <CartScreen>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>R$ 60,90</p>
              <button title="excluir item do carrinho" type="button" />
            </div>
          </CartItem>
          <CartItem>
            <img src={pizza} />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>R$ 60,90</p>
              <button title="excluir item do carrinho" type="button" />
            </div>
          </CartItem>
          <CartItem>
            <img src={pizza} />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>R$ 60,90</p>
              <button title="excluir item do carrinho" type="button" />
            </div>
          </CartItem>
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>R$ 182, 70</p>
        </Prices>
        <ModalButton title="Continuar com a entrega" type="button">
          Continuar com a entrega
        </ModalButton>
      </Sidebar>
    </CartScreen>
  )
}

export default Cart
