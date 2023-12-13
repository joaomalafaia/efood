import { createGlobalStyle, styled } from 'styled-components'

export const colors = {
  orange: '#E66767',
  white: '#FFFFFF',
  lightOrange: '#FFEBD9',
  beige: '#FFF8F2',
  fadedOrange: 'rgba(230, 103, 103, 0.05)'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.orange};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Logo = styled.img`
  height: 58px;
`

export default GlobalCss
