import styled from 'styled-components'

import pasta from '../../assets/images/pasta.png'
import { colors } from '../../styles'

export const BannerArea = styled.div`
  position: relative;
`

export const BannerImg = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${pasta});
  background-size: cover;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 280px;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`

export const BannerText = styled.p`
  font-weight: 100;
  font-size: 32px;
  color: ${colors.white};
  position: absolute;
  top: 25px;
`

export const BannerTitle = styled.h2`
  font-weight: 900;
  font-size: 32px;
  color: ${colors.white};
  position: absolute;
  bottom: 32px;
`
