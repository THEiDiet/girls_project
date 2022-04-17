import styled from 'styled-components'

import { InputT } from 'types'

export const StyledInput = styled.input.attrs<InputT, InputT>(
  ({ type, width, padding, name, id }) => ({
    type: type || 'text',
    width: width || 'auto',
    padding: padding || '1rem',
    name: name || '',
    id: id || '',
  }),
)`
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : width)};
  display: block;
  appearance: none;
  padding: ${({ padding }) => padding};
  //border: 2px solid;
  border: none;
  border-bottom: 2px solid #365a67;
  border-radius: 2px;
  background: transparent;
  &:focus {
    background: transparent;
    outline: none;
  }
`
