import styled from 'styled-components'
import { colors } from '../../styles'
import trash from '../../assets/images/trash.png'

export const CartSection = styled.div``

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
