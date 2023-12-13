import styled from 'styled-components'
import { colors } from '../../styles'

export const DishCard = styled.div`
  width: 320px;
  padding: 8px;
  font-size: 14px;
  background-color: ${colors.orange};
  color: ${colors.lightOrange};
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
  background-color: ${colors.lightOrange};
  color: ${colors.orange};
  font-weight: 700;
  padding: 4px 84px;
  border: none;
  cursor: pointer;
`
