import React, { FC, useState } from 'react'

import { ReactComponent as IconSecured } from 'assets/icons/closed.svg'
import { ReactComponent as IconInSecured } from 'assets/icons/opened.svg'
import { StyledInput, InputWithLabel, InputError, IconButton, Label } from 'styles'
import { InputPropsType } from 'types/inputT'

export const Input: FC<InputPropsType> = props => {
  const {
    label,
    id,
    name,
    onChange,
    value,
    error,
    showSecure,
    fullWidth = false,
    ...rest
  } = props
  const [isSecured, setIsSecured] = useState(showSecure)
  return (
    <InputWithLabel>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        required
        id={id}
        name={name}
        type={isSecured ? 'password' : ''}
        onChange={onChange}
        value={value}
        onBlur={rest.onBlur}
        padding="2rem"
        fullWidth={fullWidth}
      />
      {showSecure && (
        <IconButton type="button" onClick={() => setIsSecured(!isSecured)}>
          {isSecured ? <IconSecured /> : <IconInSecured />}
        </IconButton>
      )}
      {error && <InputError>{error}</InputError>}
    </InputWithLabel>
  )
}
