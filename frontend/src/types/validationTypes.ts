import { AuthT } from './UserType'

export type UtilType = {
  [key: string]: string
}

export type validateEmailT = (email: string) => UtilType

export type validatePasswordT = (password: string) => UtilType

export type validatePassAndEmailT = (
  values: Omit<AuthT, 'rememberMe'>,
) => Omit<AuthT, 'rememberMe'>
