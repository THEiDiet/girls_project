import { Dispatch } from '@reduxjs/toolkit'

import { login } from 'store/reducers/testReducer'

type LoginT = {
  email: string
  password: string
}

export const loginT =
  ({ email, password }: LoginT) =>
  (dispatch: Dispatch) => {
    console.log(email, password)
    dispatch(login('string'))
  }
