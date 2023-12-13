import styled from 'styled-components'

import { Hero } from '../Hero/styles'
import { Logo, colors } from '../../styles'

export const Header = styled(Hero)`
  height: 186px;

  &:before {
    height: 0px;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-text {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.orange};
    text-decoration: none;
  }

  ${Logo} {
    margin: 0;
  }
`

export const HeaderText = styled.p`
  font-size: 18px;
  font-weight: bold;
`
