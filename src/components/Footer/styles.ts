import styled from 'styled-components'
import { colors } from '../../styles'
import { Logo } from '../../styles'

export const FooterArea = styled.footer`
  background-color: ${colors.lightOrange};
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;

  ${Logo} {
    margin-bottom: 32px;
  }
`

export const LinksList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  li {
    list-style: none;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

export const MediaIcons = styled.img`
  height: 24px;
`

export const FooterText = styled.p`
  width: 480px;
  font-size: 10px;
  margin: 0 auto;
`
