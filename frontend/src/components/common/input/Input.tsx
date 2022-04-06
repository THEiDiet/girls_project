import React from 'react'

import { InputPropsType } from 'types/inputT'

export const CustomInput: React.FC<InputPropsType> = props => {
  const { label, onClick, icon, type, id, name, onChange, value, ...rest } = props
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          required
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          onBlur={rest.onBlur}
        />
        {icon && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <span onClick={onClick}>
            <img src={icon} alt="Button for show/close password" />
          </span>
        )}
      </div>
    </div>
  )
}
