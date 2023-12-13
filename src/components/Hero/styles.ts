import styled from 'styled-components'

import backgroundIMG from '../../assets/images/background-img.png'
import { Logo, colors } from '../../styles'

export const Hero = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 364px;
  display: block;
  background-image: url(${backgroundIMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${colors.lightOrange};
  text-align: center;

  ${Logo} {
    margin-bottom: 138px;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 364px;
    background-color: ${colors.fadedOrange};
    content: '';
  }
`

export const HeroText = styled.h2`
  font-size: 36px;
  font-weight: 900;
  max-width: 540px;
  text-align: center;
  margin: 0 auto;
`
