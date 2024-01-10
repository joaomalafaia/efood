import styled from 'styled-components'

import { colors } from '../../styles'

export const CheckoutContainer = styled.div`
  display: none;
  margin-bottom: 8px;

  &.visible {
    display: block;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 20px;
  }
`

export const InputGroup = styled.div`
  display: block;

  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    width: 100%;
    margin: 8px 0;
    height: 32px;
    padding: 8px;
    background-color: ${colors.lightOrange};
    border: 1px solid ${colors.lightOrange};

    font-size: 14px;
    font-weight: 700;
    color: #4b4b4b;

    &.error {
      background-color: lightpink;
      border: 1px solid lightpink;
    }
  }

  &.marginBottom {
    margin-bottom: 24px;
  }

  &.max-width {
    max-width: 88px;
  }
`

export const InputBlock = styled.div`
  display: flex;
  column-gap: 34px;
`
