import {
  UtilType,
  AuthT,
  validateEmailT,
  validatePassAndEmailT,
  validatePasswordT,
} from 'types'

const MIN_PASS_LENGTH = 7

export const validateEmail: validateEmailT = email => {
  const errors = {} as UtilType
  if (!email) {
    errors.email = 'Email is required'
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export const validatePassword: validatePasswordT = password => {
  const errors = {} as UtilType
  if (password.length < MIN_PASS_LENGTH) {
    errors.password = 'Password must be more than 7 symbols'
  }
  if (!password) {
    errors.password = 'Password is required'
  }
  return errors
}

export const validatePassAndEmail: validatePassAndEmailT = values =>
  ({ ...validateEmail(values.email), ...validatePassword(values.password) } as Omit<
    AuthT,
    'rememberMe'
  >)
