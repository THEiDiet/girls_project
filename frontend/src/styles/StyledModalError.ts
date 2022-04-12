import styled from 'styled-components'

export const ModalErrorWrapper = styled.div`
  background: red;
  position: fixed;
  width: 400px;
  height: 60px;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
`
export const ButtonCloseModal = styled.span`
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  appearance: none;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  text-align: center;
  letter-spacing: 1px;
  text-decoration: none;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #365a67;
  box-shadow: inset 0 0 0 0 #365a67;

  margin: 15px;
  padding: 5px 5px;
  font-size: 12px;

  &:hover {
    color: red;
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`
