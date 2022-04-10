import React from 'react'

export type InputPropsType = {
  label: string
  type?: string
  value: string
  id?: string
  name: string
  error?: string
  showSecure?: boolean
  fullWidth?: boolean
  onChange?: (e: React.ChangeEvent<any>) => void
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
