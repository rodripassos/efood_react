import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const RestaurantsList = styled.section`
  padding-top: 80px;
  color: ${cores.rosaEscuro};
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-top: 8px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify=content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${cores.rosaEscuro};
  height: 344px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
    //max-height: 280px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 60%;
    height: 520px;
  }

  header {
    display: flex;
    height: 24px;
    justify-content: end;
    padding-right: 8px;
    padding-top: 8px;
    img {
      height: 16px;
      weight: 16px;
      cursor: pointer;
    }
  }

  .infos {
    display: grid;
    grid-template-columns: 280px 1fr;
    max-height: 100%;
    color: ${cores.branca};
    padding-left: 32px;
    padding-right: 32px;
    margin-top: 8px;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }

    h4 {
      font-size: 18px;
      font-weight: 900;
      margin-left: 24px;

      @media (max-width: ${breakpoints.desktop}) {
        font-size: 16px;
        margin-left: 0;
      }
    }
    p {
      margin-top: 16px;
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      margin-left: 24px;

      @media (max-width: ${breakpoints.desktop}) {
        margin-top: 8px;
        font-size: 14px;
        line-height: 18px;
        margin-left: 0;
      }
    }
    img {
      display: block;
      width: 280px;
      height: 280px;
      object-fit: cover;

      @media (max-width: ${breakpoints.desktop}) {
        max-width: 220px;
        max-height: 220px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        max-width: 180px;
        max-height: 180px;
      }
    }
    button {
      margin-left: 24px;
      margin-top: 16px;
      border: none;
      font-size: 14px;
      font-weight: 700;
      padding: 4px 8px;
      color: ${cores.rosaEscuro};
      background-color: ${cores.rosaClaro};
      cursor: pointer;

      @media (max-width: ${breakpoints.desktop}) {
        margin-left: 0;
      }
    }
  }
`

// export const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 344px;
//   height: 100%;
//   z-index: 1;
//   display: none;
//   align-items: center;
//   justify=content: center;

//   &.visivel {
//     display: block;
//   }

//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.73);
//   }
// `

// export const ModalContent = styled.div`
//   width: 100%;
//   height: 344px;
//   padding: 32px;
//   position: relative;
//   z-index: 1;
//   background-color: ${cores.rosaEscuro};
//   color: ${cores.branca};

//   header {
//     display: block;
//     justify-content: space-between;
//   }

//   .infos {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//   }

//   div {
//     width: 280px;
//     height: 280px;

//     img {
//       width: 280px;
//       height: 280px;
//       max-width: 100%;
//       height: 100%;
//       position: relative;
//       object-fit: cover;
//     }

//     h4 {
//       font-size: 18px;
//       font-weight: bold;
//     }
//   }

//   > img {
//     width: 100%;
//   }

//   img {
//     display: block;
//     max-width: 100%;
//   }
// `
