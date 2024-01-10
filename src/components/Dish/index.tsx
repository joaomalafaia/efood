import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import close from '../../assets/images/close 1.png'

import * as S from './styles'

type Props = {
  dish: Dish
}

const Food = ({ dish }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const dispatch = useDispatch()

  const modalIsVisible = () => {
    setModalAberto(!modalAberto)
  }

  const getDescription = (text: string) => {
    if (text.length > 125) {
      return text.slice(0, 120) + '...'
    }
    return text
  }

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
    modalIsVisible()
  }

  return (
    <>
      <div>
        <S.DishCard className="container">
          <img src={dish.foto} alt={dish.nome} />
          <S.DishTitle>{dish.nome}</S.DishTitle>
          <S.DishText>{getDescription(dish.descricao)}</S.DishText>
          <S.DishButton title={dish.nome} onClick={modalIsVisible}>
            Mais detalhes
          </S.DishButton>
        </S.DishCard>
      </div>
      <S.Modal className={modalAberto === true ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img
            src={close}
            alt="close icon"
            className="close"
            onClick={modalIsVisible}
          />
          <img src={dish.foto} alt={dish.nome} className="dish" />
          <S.ModalText>
            <h3>{dish.nome}</h3>
            <p>{dish.descricao}</p>
            <p>{dish.porcao}</p>
            <S.ModalButton
              title={`Adicionar ${dish.nome} ao carrinho`}
              onClick={addToCart}
            >
              Adicionar ao carrinho - {parseToBrl(dish.preco)}
            </S.ModalButton>
          </S.ModalText>
        </S.ModalContent>
        <div className="overlay" onClick={modalIsVisible}></div>
      </S.Modal>
    </>
  )
}

export default Food
