import styled, { keyframes } from 'styled-components'

import { ButtonT } from 'types'

const hover = keyframes`
  0%{
    transform: scale(1);
  }

  100%{
    transform: scale(1.01);
  }
`
const active = keyframes`
  0%{
    background: inherit;
  }

  100%{
    background: red;
  }
`

export const Button = styled.button.attrs<ButtonT, ButtonT>(({ type, size }) => ({
  type: type || 'button',
  size: size || '1rem',
}))`
  display: block;
  appearance: none;
  padding: ${({ size }) => size};
  border: none;
  border-radius: 2px;
  margin-top: ${({ mt }) => mt || '0.1rem'};
  margin-bottom: ${({ mb }) => mb || '0.1rem'};
  outline: none;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  &:hover {
    background: #37706d;
    opacity: 0.2;
    animation: ${hover} 200ms linear;
  }
  &:focus {
    outline: 2px solid #fc9c92;
  }
  &:active {
    animation: ${active} 300ms ease-in forwards;
  }
  &:disabled {
    opacity: 50%;
    animation: none;
  }
`
