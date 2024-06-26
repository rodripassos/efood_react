import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  fundo: '#FFF8F2',
  rosaEscuro: '#E66767',
  rosaClaro: '#FFEBD9',
  preta: '#000',
  inputColor: '#4B4B4B'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.rosaClaro};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
