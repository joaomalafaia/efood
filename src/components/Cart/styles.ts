import styled from 'styled-components'
import { colors } from '../../styles'
import { ModalButton } from '../Dish/styles'
import trash from '../../assets/images/trash.png'

export const CartScreen = styled.div`
  position: fixed;
  display: none;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;

  &.opened {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Sidebar = styled.aside`
  z-index: 1;
  width: 360px;
  background-color: ${colors.orange};
  padding: 32px 8px 0;
  color: ${colors.lightOrange};

  ${ModalButton} {
    max-width: 100%;
    width: 100%;
  }
`

export const CartItem = styled.li`
  max-width: 100%;
  width: 100%;
  padding: 8px 8px 12px;
  background-color: ${colors.lightOrange};
  color: ${colors.orange};
  display: flex;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h4 {
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${trash});
    background-color: transparent;
    border: none;
    height: 16px;
    width: 16px;

    position: absolute;
    right: 8px;
    bottom: 8px;

    cursor: pointer;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`
