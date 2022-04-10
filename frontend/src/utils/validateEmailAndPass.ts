import { AuthT } from 'types'

const MIN_PASS_LENGTH = 7

// eslint-disable-next-line consistent-return,@typescript-eslint/explicit-function-return-type
export const validateEmail = (email: string) => {
  if (!email) {
    return 'Email is required'
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return 'Invalid email address'
  }
}
// eslint-disable-next-line consistent-return,@typescript-eslint/explicit-function-return-type
export const validatePassword = (password: string) => {
  if (password.length < MIN_PASS_LENGTH) {
    return 'Password must be more than 7 symbols'
  }
  if (!password) {
    return 'Password is required'
  }
}
// eslint-disable-next-line consistent-return,@typescript-eslint/explicit-function-return-type
export const validatePassAndEmail = (values: Omit<AuthT, 'rememberMe'>) =>
  ({
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  } as Omit<AuthT, 'rememberMe'>)
// if (!values.email) {
//   errors.email = 'Email is required'
// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//   errors.email = 'Invalid email address'
// }
// if (values.password.length < MIN_PASS_LENGTH) {
//   errors.password = 'Password must be more than 7 symbols'
// } else if (!values.password) {
//   errors.password = 'Password is required'
// }
// return errors
