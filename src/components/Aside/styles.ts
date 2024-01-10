import styled from 'styled-components'
import { colors } from '../../styles'
import { ModalButton } from '../Dish/styles'

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

  > p {
    text-align: center;
    font-weight: bold;
  }

  > div {
    display: none;

    &.visible {
      display: block;
    }
  }

  ${ModalButton} {
    max-width: 100%;
    width: 100%;

    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }

  h3 {
    font-size: 16px;
    color: ${colors.lightOrange};
    margin-bottom: 16px;
  }
`
