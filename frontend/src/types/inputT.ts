import React from 'react'

export type InputPropsType = {
  label: string
  icon?: string
  type: string
  value: string
  id?: string
  name: string
  onClick?: () => void
  onChange?: (e: React.ChangeEvent<any>) => void
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
