import styled from 'styled-components'

import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  padding: ${(props) => (props.type === 'filter' ? '6px 4px' : '4px 6px')};
  font-size: ${(props) => (props.type === 'filter' ? '12px' : '14px')};
  color: ${colors.lightOrange};
  font-weight: bold;
  background-color: ${colors.orange};
  display: inline-block;
`
