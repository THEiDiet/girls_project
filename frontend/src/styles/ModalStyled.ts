import styled from 'styled-components'

export const ModalStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.11);

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background: #fff;
    z-index: 100;
    transform: translate(-50%, -50%);
  }
`
