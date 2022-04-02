import { Dispatch } from '@reduxjs/toolkit'

import { login } from 'store/reducers/testReducer'

type LoginT = {
  name: string
  password: string
}

export const loginT =
  ({ name, password }: LoginT) =>
  (dispatch: Dispatch) => {
    console.log(name, password)
    dispatch(login('string'))
  }
