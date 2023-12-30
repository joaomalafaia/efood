import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const RestaurantCard = styled.div`
  background-color: ${colors.white};
  position: relative;

  > img {
    width: 472px;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardDescription = styled.div`
  padding: 8px;
  border-top: 0;
  border-right: 1px;
  border-bottom: 1px;
  border-left: 1px;
  border-color: ${colors.orange};
  border-style: solid;

  .link {
    padding: 4px 6px;
    font-size: 14px;
    color: ${colors.lightOrange};
    font-weight: bold;
    background-color: ${colors.orange};
    display: inline-block;
    text-decoration: none;
  }
`

export const CardTitleSection = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;

  .note {
    display: flex;
    align-content: center;

    img {
      height: 21px;
      margin-left: 8px;
    }
  }
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const CardText = styled.p`
  display: block;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const Link = styled(TagContainer)`
  cursor: pointer;
`
