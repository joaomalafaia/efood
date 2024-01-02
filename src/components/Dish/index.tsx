import { useDispatch } from 'react-redux'

import {
  DishCard,
  DishTitle,
  DishText,
  DishButton,
  Modal,
  ModalContent,
  ModalText,
  ModalButton
} from './styles'
import close from '../../assets/images/close 1.png'
import { useState } from 'react'
import { Dish } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

type Props = {
  dish: Dish
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Food = ({ dish }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const dispatch = useDispatch()

  const modalIsVisible = () => {
    setModalAberto(!modalAberto)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 125) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
    modalIsVisible()
  }

  return (
    <>
      <div>
        <DishCard className="container">
          <img src={dish.foto} alt={dish.nome} />
          <DishTitle>{dish.nome}</DishTitle>
          <DishText>{getDescricao(dish.descricao)}</DishText>
          <DishButton onClick={modalIsVisible}>Mais detalhes</DishButton>
        </DishCard>
      </div>
      <Modal className={modalAberto === true ? 'visible' : ''}>
        <ModalContent className="container">
          <img
            src={close}
            alt="close icon"
            className="close"
            onClick={modalIsVisible}
          />
          <img src={dish.foto} alt={dish.nome} className="dish" />
          <ModalText>
            <h3>{dish.nome}</h3>
            <p>{dish.descricao}</p>
            <p>{dish.porcao}</p>
            <ModalButton onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(dish.preco)}
            </ModalButton>
          </ModalText>
        </ModalContent>
        <div className="overlay" onClick={modalIsVisible}></div>
      </Modal>
    </>
  )
}

export default Food
