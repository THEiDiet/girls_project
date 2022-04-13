import styled, { CSSProp } from 'styled-components'

export const Checkmark = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background-color: #DDE9EC;
  transition: all 0.3s;
  border-radius: 2px;
  margin-bottom: 10px;

  &:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);   
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`
export const Input = styled.input`
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${Checkmark}:after {
    display: block;
  }
  &:checked ~ ${Checkmark} {
    background-color: #365A67;
    animation: pop 0.5s;
    animation-direction: alternate;
  }
`
export const Label = styled.label<{ justifyContent?: CSSProp }>`
  justify-content: ${({ justifyContent }) => justifyContent};
  height: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  position: relative;
  cursor: pointer;
  //user-select: none;
`

export const LabelText = styled.p`
  color: red;
`
