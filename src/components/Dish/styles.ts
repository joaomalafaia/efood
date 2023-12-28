import styled from 'styled-components'
import { colors } from '../../styles'

export const DishCard = styled.div`
  width: 320px;
  padding: 8px;
  font-size: 14px;
  background-color: ${colors.orange};
  color: ${colors.lightOrange};

  img {
    width: 100%;
    height: 168px;
    object-fit: cover;
  }
`

export const DishTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const DishText = styled.p`
  font-weight: 400;
  margin-bottom: 8px;
`

export const DishButton = styled.button`
  width: 100%;
  background-color: ${colors.lightOrange};
  color: ${colors.orange};
  font-weight: 700;
  padding: 4px 84px;
  border: none;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .container {
    width: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  padding: 32px;
  background-color: ${colors.orange};
  z-index: 1;

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  .dish {
    height: 280px;
    width: 280px;
    object-fit: cover;
  }
`

export const ModalText = styled.div`
  display: block;
  width: 656px;
  margin-left: 24px;
  color: ${colors.white};

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
    max-width: 100%;
  }
`

export const ModalButton = styled(DishButton)`
  width: fit-content;
  font-size: 14px;
  padding: 4px 8px;
`
