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

type Props = {
  dishes: Dish
}

const Food = ({ dishes }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  const modalIsVisible = () => {
    setModalAberto(!modalAberto)
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 125) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  return (
    <>
      <div>
        <DishCard className="container">
          <img src={dishes.foto} alt={dishes.nome} />
          <DishTitle>{dishes.nome}</DishTitle>
          <DishText>{getDescricao(dishes.descricao)}</DishText>
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
          <img src={dishes.foto} alt={dishes.nome} className="dish" />
          <ModalText>
            <h3>{dishes.nome}</h3>
            <p>{dishes.descricao}</p>
            <p>{dishes.porcao}</p>
            <ModalButton>
              Adicionar ao carrinho - {formataPreco(dishes.preco)}
            </ModalButton>
          </ModalText>
        </ModalContent>
        <div className="overlay" onClick={modalIsVisible}></div>
      </Modal>
    </>
  )
}

export default Food
